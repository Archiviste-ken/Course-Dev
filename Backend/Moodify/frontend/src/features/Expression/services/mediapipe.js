// services/mediapipe.js

import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";

let faceLandmarker = null;
let runningMode = "VIDEO";

// -------- INIT --------
export const init = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );

  faceLandmarker = await FaceLandmarker.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
    },
    outputFaceBlendshapes: true,
    runningMode,
    numFaces: 1,
  });

  console.log("MediaPipe Ready ✅");
};

// -------- DETECT --------
export const detect = (video, setExpression) => {
  if (!faceLandmarker || video.readyState < 2) return;

  const results = faceLandmarker.detectForVideo(
    video,
    performance.now()
  );

  if (!results.faceBlendshapes?.length) return;

  const blendShapes = results.faceBlendshapes[0].categories;

  const getScore = (name) => {
    const found = blendShapes.find((b) => b.categoryName === name);
    return found ? found.score : 0;
  };

  const smile =
    getScore("mouthSmileLeft") + getScore("mouthSmileRight");

  const frown =
    getScore("mouthFrownLeft") + getScore("mouthFrownRight");

  const jawOpen = getScore("jawOpen");

  const eyeBlink =
    (getScore("eyeBlinkLeft") + getScore("eyeBlinkRight")) / 2;

  const browRaise =
    getScore("browInnerUp") +
    getScore("browOuterUpLeft") +
    getScore("browOuterUpRight");


    console.log(getScore("mouthFrownLeft"),getScore("mouthFrownRight"));
    

  let expression = "neutral";

  if (smile > 0.6) expression = "happy";
  else if (frown > 0.1) expression = "sad";
  else if (jawOpen > 0.6 && browRaise > 0.5)
    expression = "surprised";

  if (eyeBlink > 0.6) expression = "blinking";

  setExpression(expression);
};