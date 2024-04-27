import React from "react";
import BoxCover from "./BoxCover";
import Lights from "./Lights";
import Iphone from "./Iphone";
import { Iphone2 } from "./Iphone2";
import { useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export const Experience = () => {
  const camera = useThree((state) => state.camera);

  function logCameraPosition() {
    console.log(camera);
  }
  window.addEventListener("click", logCameraPosition);

  return (
    <>
      <Environment preset="city" />
      <Lights />
      <Iphone />
      <Iphone2 />
      <BoxCover />
      <OrbitControls />
    </>
  );
};
