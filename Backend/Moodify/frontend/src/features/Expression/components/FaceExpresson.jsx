import React, { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

/* =========================
   🌍 GLOBAL STATE
========================= */
let animationFrameId = null;

/* =========================
   🧠 INIT MODEL
========================= */
export const initFaceLandmarker = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
  );

  return await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
  });
};

/* =========================
   🔍 DETECTION LOOP
========================= */
export const startDetection = ({
  video,
  landmarker,
  onExpression,
  onScores,
}) => {
  const detect = () => {
    if (!video || video.readyState < 2) {
      animationFrameId = requestAnimationFrame(detect);
      return;
    }

    const results = landmarker.detectForVideo(video, Date.now());

    if (results.faceBlendshapes?.length > 0) {
      const blendshapes = results.faceBlendshapes[0].categories;

      console.log("Blendshapes:", blendshapes);

      const getScore = (name) =>
        blendshapes.find((b) => b.categoryName === name)?.score || 0;

      const smileLeft = getScore("mouthSmileLeft");
      const smileRight = getScore("mouthSmileRight");
      const jawOpen = getScore("jawOpen");
      const mouthOpen = getScore("mouthOpen");
      const browUp = getScore("browInnerUp");
      const frownLeft = getScore("mouthFrownLeft");
      const frownRight = getScore("mouthFrownRight");
      const eyeWideLeft = getScore("eyeWideLeft");
      const eyeWideRight = getScore("eyeWideRight");

      onScores({
        smileLeft,
        smileRight,
        jawOpen,
        mouthOpen,
        browUp,
        frownLeft,
        frownRight,
        eyeWideLeft,
        eyeWideRight,
      });

      let expression = "😶 Neutral";

      if (
        (jawOpen > 0.4 || mouthOpen > 0.4) &&
        (eyeWideLeft > 0.3 || eyeWideRight > 0.3) &&
        browUp > 0.3
      ) {
        expression = "😲 Surprised";
      } else if (smileLeft > 0.5 && smileRight > 0.5) {
        expression = "😊 Happy";
      } else if (frownLeft > 0.5 && frownRight > 0.5) {
        expression = "😢 Sad";
      } else if (
        getScore("eyeBlinkLeft") > 0.6 &&
        getScore("eyeBlinkRight") > 0.6
      ) {
        expression = "😐 Blinking";
      }

      onExpression(expression);
    }

    animationFrameId = requestAnimationFrame(detect);
  };

  detect();
};

export const stopDetection = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
};

/* =========================
   ⚛️ COMPONENT
========================= */

const FaceExpression = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [landmarker, setLandmarker] = useState(null);
  const [expression, setExpression] = useState("Loading...");
  const [scores, setScores] = useState({});
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState("");

  /* 🧠 Load Model */
  useEffect(() => {
    const load = async () => {
      console.log("Loading model...");
      const model = await initFaceLandmarker();
      console.log("Model loaded");
      setLandmarker(model);
    };
    load();
  }, []);

  /* 🎥 Get Cameras */
  useEffect(() => {
    const initCameras = async () => {
      await navigator.mediaDevices.getUserMedia({ video: true });

      const devices = await navigator.mediaDevices.enumerateDevices();
      const cams = devices.filter((d) => d.kind === "videoinput");

      console.log("Cameras:", cams);

      setCameras(cams);

      if (cams.length > 0) {
        setSelectedCamera(cams[0].deviceId);
      }
    };

    initCameras();
  }, []);

  /* 🎥 Start Camera */
  useEffect(() => {
    if (!selectedCamera) return;

    const startCamera = async () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: { exact: selectedCamera } },
      });

      streamRef.current = stream;
      videoRef.current.srcObject = stream;
    };

    startCamera();
  }, [selectedCamera]);

  /* 🔍 Start Detection ONLY when BOTH ready */
  useEffect(() => {
    if (!landmarker || !videoRef.current) return;

    console.log("Starting detection...");

    startDetection({
      video: videoRef.current,
      landmarker,
      onExpression: setExpression,
      onScores: setScores,
    });

    return () => stopDetection();
  }, [landmarker]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Face Expression Detector</h2>

      <select
        value={selectedCamera}
        onChange={(e) => setSelectedCamera(e.target.value)}
      >
        {cameras.map((cam, i) => (
          <option key={cam.deviceId} value={cam.deviceId}>
            {cam.label || `Camera ${i + 1}`}
          </option>
        ))}
      </select>

      <br /><br />

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "400px", borderRadius: "10px" }}
      />

      <h3>{expression}</h3>

      <div style={{ textAlign: "left", width: "400px", margin: "auto" }}>
        {Object.entries(scores).map(([k, v]) => (
          <p key={k}>
            {k}: {v.toFixed(3)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FaceExpression;