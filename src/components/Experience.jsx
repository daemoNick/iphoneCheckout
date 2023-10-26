import React from "react";
import BoxCover from "./BoxCover";
import Lights from "./Lights";
import Iphone from "./Iphone";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  const camera = useThree((state) => state.camera);

  function logCameraPosition() {
    console.log(camera);
  }
  window.addEventListener("click", logCameraPosition);

  return (
    <>
      <OrbitControls />
      <Lights />
      <BoxCover></BoxCover>
      <Iphone />
    </>
  );
};
