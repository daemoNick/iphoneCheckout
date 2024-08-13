import React, { useState } from "react";
import Lights from "./Lights";
import { useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { AddToCart } from "./AddToCart";
import RotatingModel from "./RotatingModel";

export const Experience = ({ isPlaying, playOnce, onReset }) => {
  const camera = useThree((state) => state.camera);

  return (
    <>
      <Environment files="/phone_shop_1k.hdr" blur={0.05} />
      <Lights />
      <RotatingModel onReset={onReset}>
        <AddToCart
          isPlaying={isPlaying}
          position={[0, -1, 0]}
          playOnce={playOnce}
        />
      </RotatingModel>
      {/* <OrbitControls /> */}
    </>
  );
};
