import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Iphone = () => {
  const model = useGLTF("/iphone15pro-v2.glb");
  return (
    <>
      <mesh>
        <primitive object={model.scene} />
      </mesh>
    </>
  );
};

export default Iphone;
