import React from "react";
import { RoundedBox } from "@react-three/drei";

const Iphone = () => {
  return (
    <>
      <RoundedBox args={[1.3, 2.4, 0.25]} radius={0.1}>
        <meshLambertMaterial attach="material" color={0xfa1302} />
      </RoundedBox>
    </>
  );
};

export default Iphone;
