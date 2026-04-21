import React, { useEffect, useRef, useState } from "react";
import { init, detect } from "../services/mediapipe";
import { getAvailableCameras, startCamera } from "../utils/camera";


const FaceExpression = () => {
  const videoRef = useRef(null);

  const [expression, setExpression] = useState("loading...");
  const [cameras, setCameras] = useState([]);
  const [selectedCam, setSelectedCam] = useState("");

  useEffect(() => {
    let animationFrame;

    const start = async () => {
      await init();

      // ✅ get cameras
      const cams = await getAvailableCameras();
      setCameras(cams);

      if (cams.length === 0) return;

      // ✅ pick first camera
      const defaultCam = cams[0].id;
      setSelectedCam(defaultCam);

      // ✅ start camera using util
      const stream = await startCamera(defaultCam);
      videoRef.current.srcObject = stream;

      videoRef.current.onloadeddata = () => {
        const loop = () => {
          detect(videoRef.current, setExpression);
          animationFrame = requestAnimationFrame(loop);
        };
        loop();
      };
    };

    start();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // ✅ camera switch handler
  const handleChangeCamera = async (deviceId) => {
    setSelectedCam(deviceId);

    const stream = await startCamera(deviceId);
    videoRef.current.srcObject = stream;
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Expression: {expression}</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "400px", borderRadius: "10px" }}
      />

      {/* ✅ camera selector */}
      <div style={{ marginTop: "10px" }}>
        <select
          value={selectedCam}
          onChange={(e) => handleChangeCamera(e.target.value)}
        >
          {cameras.map((cam) => (
            <option key={cam.id} value={cam.id}>
              {cam.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FaceExpression;