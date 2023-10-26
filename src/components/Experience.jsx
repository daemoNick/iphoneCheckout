import { OrbitControls } from "@react-three/drei";
import BoxCover from "./BoxCover";
import Lights from "./Lights";
import Iphone from "./Iphone";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Lights />
      <BoxCover></BoxCover>
      <Iphone />
    </>
  );
};
