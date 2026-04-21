import React, { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const FaceExpression = () => {
  const videoRef = useRef(null);

  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [expression, setExpression] = useState("Loading...");
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState("");

  // 🧠 Load model
  useEffect(() => {
    const loadModel = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );

      const landmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
      });

      setFaceLandmarker(landmarker);
    };

    loadModel();
  }, []);

  // 🎥 Get camera list
  useEffect(() => {
    const getCameras = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cams = devices.filter((d) => d.kind === "videoinput");

      setCameras(cams);

      // default select first camera
      if (cams.length > 0) {
        setSelectedCamera(cams[0].deviceId);
      }
    };

    getCameras();
  }, []);

  // 🎥 Start camera when selectedCamera changes
  useEffect(() => {
    if (!selectedCamera) return;

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: { exact: selectedCamera },
          },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    startCamera();
  }, [selectedCamera]);

  // 🔍 Detection loop
  useEffect(() => {
    if (!faceLandmarker || !videoRef.current) return;

    let animationFrameId;

    const detect = () => {
      const video = videoRef.current;

      if (video.readyState >= 2) {
        const results = faceLandmarker.detectForVideo(video, Date.now());

        if (results.faceBlendshapes?.length > 0) {
          const blendshapes = results.faceBlendshapes[0].categories;
          const expr = getExpression(blendshapes);
          setExpression(expr);
        }
      }

      animationFrameId = requestAnimationFrame(detect);
    };

    detect();

    return () => cancelAnimationFrame(animationFrameId);
  }, [faceLandmarker]);

  // 🧠 Expression logic
  const getExpression = (blendshapes) => {
    const map = {};
    blendshapes.forEach((b) => {
      map[b.categoryName] = b.score;
    });

    if (map.mouthSmileLeft > 0.5 || map.mouthSmileRight > 0.5) {
      return "😊 Happy";
    }

    if (map.browInnerUp > 0.5 && map.mouthFrownLeft > 0.3) {
      return "😢 Sad";
    }

    if (map.eyeBlinkLeft > 0.6 && map.eyeBlinkRight > 0.6) {
      return "😐 Blinking";
    }

    return "😶 Neutral";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Face Expression Detector</h2>

      {/* 🎥 Camera Selector */}
      <select
        value={selectedCamera}
        onChange={(e) => setSelectedCamera(e.target.value)}
      >
        {cameras.map((cam) => (
          <option key={cam.deviceId} value={cam.deviceId}>
            {cam.label || `Camera ${cam.deviceId}`}
          </option>
        ))}
      </select>

      <br /><br />

      {/* 📹 Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "400px", borderRadius: "10px" }}
      />

      <h3>{expression}</h3>
    </div>
  );
};

export default FaceExpression;