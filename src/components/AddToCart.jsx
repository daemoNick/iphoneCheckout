import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function AddToCart({ isPlaying, playOnce, groupRef, ...props }) {
  const localGroupRef = useRef();
  const { nodes, materials, animations } = useGLTF("/phoneAndPackAnim.glb");
  const { actions } = useAnimations(animations, localGroupRef);

  useEffect(() => {
    // It sets up the animations but doesn't play them yet
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.clampWhenFinished = true;
          action.loop = THREE.LoopOnce;
        }
      });
    }
  }, [actions]);

  useEffect(() => {
    if (actions) {
      if (playOnce) {
        Object.values(actions).forEach((action) => {
          if (action) {
            action.reset().play();
            action.loop = THREE.LoopOnce;
          }
        });
      } else if (isPlaying) {
        Object.values(actions).forEach((action) => {
          if (action) {
            action.reset().play();
            action.loop = THREE.LoopRepeat;
          }
        });
      } else {
        Object.values(actions).forEach((action) => {
          if (action) {
            action.stop();
          }
        });
      }
    }
  }, [actions, isPlaying, playOnce]);

  return (
    <group ref={groupRef || localGroupRef} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Circle"
          position={[-0.198, 4.608, -3.757]}
          rotation={[-0.03, 0, 0]}
          scale={0.122}
        />
        <group name="Empty" position={[0.129, 1.121, 0.971]}>
          <group
            name="ActionButton"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="ActionButton_1"
              castShadow
              receiveShadow
              geometry={nodes.ActionButton_1.geometry}
              material={materials["eShKpuMNVJTRrgg.001"]}
            />
            <mesh
              name="ActionButton_2"
              castShadow
              receiveShadow
              geometry={nodes.ActionButton_2.geometry}
              material={materials["dxCVrUCvYhjVxqy.001"]}
            />
          </group>
          <group
            name="Antenna"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="Antenna_1"
              castShadow
              receiveShadow
              geometry={nodes.Antenna_1.geometry}
              material={materials["jpGaQNgTtEGkTfo.001"]}
            />
            <mesh
              name="Antenna_2"
              castShadow
              receiveShadow
              geometry={nodes.Antenna_2.geometry}
              material={materials["xdyiJLYTYRfJffH.001"]}
            />
            <mesh
              name="Antenna_3"
              castShadow
              receiveShadow
              geometry={nodes.Antenna_3.geometry}
              material={materials["dxCVrUCvYhjVxqy.001"]}
            />
          </group>
          <group
            name="AppleLogo"
            position={[-0.107, -1.051, -0.94]}
            scale={0.995}
          >
            <mesh
              name="AppleLogo_1"
              castShadow
              receiveShadow
              geometry={nodes.AppleLogo_1.geometry}
              material={materials["ZQfGMLaFcpPaLMU.001"]}
            />
            <mesh
              name="AppleLogo_2"
              castShadow
              receiveShadow
              geometry={nodes.AppleLogo_2.geometry}
              material={materials["dwrMminMXjXXeek.001"]}
            />
          </group>
          <mesh
            name="Bottom"
            castShadow
            receiveShadow
            geometry={nodes.Bottom.geometry}
            material={materials.Back}
            position={[-6.059, 0.295, 3.905]}
            rotation={[3.123, 1.568, -1.552]}
            visible={isPlaying || playOnce}
          />
          <group
            name="BottomScrews"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="BottomScrews_1"
              castShadow
              receiveShadow
              geometry={nodes.BottomScrews_1.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
            <mesh
              name="BottomScrews_2"
              castShadow
              receiveShadow
              geometry={nodes.BottomScrews_2.geometry}
              material={materials["MHFGNLrDQbTNima.001"]}
            />
            <mesh
              name="BottomScrews_3"
              castShadow
              receiveShadow
              geometry={nodes.BottomScrews_3.geometry}
              material={materials["mvjnAONQuIshyfX.001"]}
            />
          </group>
          <group
            name="BottomSpeakers"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="BottomSpeakers_1"
              castShadow
              receiveShadow
              geometry={nodes.BottomSpeakers_1.geometry}
              material={materials["pIhYLPqiSQOZTjn.001"]}
            />
            <mesh
              name="BottomSpeakers_2"
              castShadow
              receiveShadow
              geometry={nodes.BottomSpeakers_2.geometry}
              material={materials["mvjnAONQuIshyfX.001"]}
            />
          </group>
          <mesh
            name="ButtonBackground"
            castShadow
            receiveShadow
            geometry={nodes.ButtonBackground.geometry}
            material={materials["hUlRcbieVuIiOXG.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="DynamicIsland"
            castShadow
            receiveShadow
            geometry={nodes.DynamicIsland.geometry}
            material={materials["ujsvqBWRMnqdwPx.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="Frame"
            castShadow
            receiveShadow
            geometry={nodes.Frame.geometry}
            material={materials["eShKpuMNVJTRrgg.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="FrontBezel"
            castShadow
            receiveShadow
            geometry={nodes.FrontBezel.geometry}
            material={materials["zFdeDaGNRwzccye.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="FrontBezelPadding"
            castShadow
            receiveShadow
            geometry={nodes.FrontBezelPadding.geometry}
            material={materials["hUlRcbieVuIiOXG.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <group
            name="FrontCamera"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="FrontCamera_1"
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_1.geometry}
              material={materials["sxNzrmuTqVeaXdg.001"]}
            />
            <mesh
              name="FrontCamera_2"
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_2.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
            <mesh
              name="FrontCamera_3"
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_3.geometry}
              material={materials["TBLSREBUyLMVtJa.001"]}
            />
            <mesh
              name="FrontCamera_4"
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_4.geometry}
              material={materials["xNrofRCqOXXHVZt.001"]}
            />
            <mesh
              name="FrontCamera_5"
              castShadow
              receiveShadow
              geometry={nodes.FrontCamera_5.geometry}
              material={materials["yQQySPTfbEJufve.001"]}
            />
          </group>
          <mesh
            name="InnerFrame"
            castShadow
            receiveShadow
            geometry={nodes.InnerFrame.geometry}
            material={materials["hUlRcbieVuIiOXG.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="LidarScanner"
            castShadow
            receiveShadow
            geometry={nodes.LidarScanner.geometry}
            material={materials["vhaEJjZoqGtyLdo.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="manualeject"
            castShadow
            receiveShadow
            geometry={nodes.manualeject.geometry}
            material={materials.Back}
            position={[-0.195, 8.651, -3.169]}
            rotation={[Math.PI / 2, 1.571, 0]}
            visible={isPlaying || playOnce}
          />
          <group
            name="RearCam1"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="RearCam1_1"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_1.geometry}
              material={materials["eShKpuMNVJTRrgg.001"]}
            />
            <mesh
              name="RearCam1_2"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_2.geometry}
              material={materials["PpwUTnTFZJXxCoE.001"]}
            />
            <mesh
              name="RearCam1_3"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_3.geometry}
              material={materials["jlzuBkUzuJqgiAK.001"]}
            />
            <mesh
              name="RearCam1_4"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_4.geometry}
              material={materials["xNrofRCqOXXHVZt.001"]}
            />
            <mesh
              name="RearCam1_5"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_5.geometry}
              material={materials["EuTsEfyoAnyJIih.001"]}
            />
            <mesh
              name="RearCam1_6"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_6.geometry}
              material={materials["EszxgwYUTxbhBrC.001"]}
            />
            <mesh
              name="RearCam1_7"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_7.geometry}
              material={materials["yQQySPTfbEJufve.001"]}
            />
            <mesh
              name="RearCam1_8"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_8.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
            <mesh
              name="RearCam1_9"
              castShadow
              receiveShadow
              geometry={nodes.RearCam1_9.geometry}
              material={materials["fkUApOHLQsMUdfd.001"]}
            />
          </group>
          <group
            name="RearCam2"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="RearCam2_1"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_1.geometry}
              material={materials["EszxgwYUTxbhBrC.001"]}
            />
            <mesh
              name="RearCam2_2"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_2.geometry}
              material={materials["jlzuBkUzuJqgiAK.001"]}
            />
            <mesh
              name="RearCam2_3"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_3.geometry}
              material={materials["PpwUTnTFZJXxCoE.001"]}
            />
            <mesh
              name="RearCam2_4"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_4.geometry}
              material={materials["eShKpuMNVJTRrgg.001"]}
            />
            <mesh
              name="RearCam2_5"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_5.geometry}
              material={materials["xNrofRCqOXXHVZt.001"]}
            />
            <mesh
              name="RearCam2_6"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_6.geometry}
              material={materials["EuTsEfyoAnyJIih.001"]}
            />
            <mesh
              name="RearCam2_7"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_7.geometry}
              material={materials["yQQySPTfbEJufve.001"]}
            />
            <mesh
              name="RearCam2_8"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_8.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
            <mesh
              name="RearCam2_9"
              castShadow
              receiveShadow
              geometry={nodes.RearCam2_9.geometry}
              material={materials["fkUApOHLQsMUdfd.001"]}
            />
          </group>
          <group
            name="RearCam3"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="RearCam3_1"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_1.geometry}
              material={materials["EuTsEfyoAnyJIih.001"]}
            />
            <mesh
              name="RearCam3_2"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_2.geometry}
              material={materials["jlzuBkUzuJqgiAK.001"]}
            />
            <mesh
              name="RearCam3_3"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_3.geometry}
              material={materials["PpwUTnTFZJXxCoE.001"]}
            />
            <mesh
              name="RearCam3_4"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_4.geometry}
              material={materials["eShKpuMNVJTRrgg.001"]}
            />
            <mesh
              name="RearCam3_5"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_5.geometry}
              material={materials["xNrofRCqOXXHVZt.001"]}
            />
            <mesh
              name="RearCam3_6"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_6.geometry}
              material={materials["EszxgwYUTxbhBrC.001"]}
            />
            <mesh
              name="RearCam3_7"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_7.geometry}
              material={materials["yQQySPTfbEJufve.001"]}
            />
            <mesh
              name="RearCam3_8"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_8.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
            <mesh
              name="RearCam3_9"
              castShadow
              receiveShadow
              geometry={nodes.RearCam3_9.geometry}
              material={materials["fkUApOHLQsMUdfd.001"]}
            />
          </group>
          <mesh
            name="RearCameraCutuout"
            castShadow
            receiveShadow
            geometry={nodes.RearCameraCutuout.geometry}
            material={materials["bCgzXjHOanGdTFV.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="RearCameraIsland"
            castShadow
            receiveShadow
            geometry={nodes.RearCameraIsland.geometry}
            material={materials["ZQfGMLaFcpPaLMU.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="RearCover"
            castShadow
            receiveShadow
            geometry={nodes.RearCover.geometry}
            material={materials["oZRkkORNzkufnGD.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <group
            name="RearFlash"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="RearFlash_1"
              castShadow
              receiveShadow
              geometry={nodes.RearFlash_1.geometry}
              material={materials["HGhEhpqSBZRnjHC.001"]}
            />
            <mesh
              name="RearFlash_2"
              castShadow
              receiveShadow
              geometry={nodes.RearFlash_2.geometry}
              material={materials["fkUApOHLQsMUdfd.001"]}
            />
            <mesh
              name="RearFlash_3"
              castShadow
              receiveShadow
              geometry={nodes.RearFlash_3.geometry}
              material={materials["hiVunnLeAHkwGEo.001"]}
            />
            <mesh
              name="RearFlash_4"
              castShadow
              receiveShadow
              geometry={nodes.RearFlash_4.geometry}
              material={materials["JJvGZqtXqnnFakR.001"]}
            />
          </group>
          <mesh
            name="RearGlass"
            castShadow
            receiveShadow
            geometry={nodes.RearGlass.geometry}
            material={materials["yhcAXNGcJWCqtIS.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <group
            name="RearMic"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="RearMic_1"
              castShadow
              receiveShadow
              geometry={nodes.RearMic_1.geometry}
              material={materials["yiDkEwDSyEhavuP.001"]}
            />
            <mesh
              name="RearMic_2"
              castShadow
              receiveShadow
              geometry={nodes.RearMic_2.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
          </group>
          <mesh
            name="Screen"
            castShadow
            receiveShadow
            geometry={nodes.Screen.geometry}
            material={materials["pIJKfZsazmcpEiU.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="Sensors"
            castShadow
            receiveShadow
            geometry={nodes.Sensors.geometry}
            material={materials["ujsvqBWRMnqdwPx.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <group
            name="SideButton"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="SideButton_1"
              castShadow
              receiveShadow
              geometry={nodes.SideButton_1.geometry}
              material={materials["eShKpuMNVJTRrgg.001"]}
            />
            <mesh
              name="SideButton_2"
              castShadow
              receiveShadow
              geometry={nodes.SideButton_2.geometry}
              material={materials["dxCVrUCvYhjVxqy.001"]}
            />
          </group>
          <mesh
            name="SideButtonsPadding"
            castShadow
            receiveShadow
            geometry={nodes.SideButtonsPadding.geometry}
            material={materials["dxCVrUCvYhjVxqy.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <mesh
            name="SideStrips"
            castShadow
            receiveShadow
            geometry={nodes.SideStrips.geometry}
            material={materials["eHgELfGhsUorIYR.001"]}
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          />
          <group
            name="Speakers"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="Speakers_1"
              castShadow
              receiveShadow
              geometry={nodes.Speakers_1.geometry}
              material={materials["iCxrnlRvbVOguYp.001"]}
            />
            <mesh
              name="Speakers_2"
              castShadow
              receiveShadow
              geometry={nodes.Speakers_2.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
          </group>
          <mesh
            name="Spiral"
            castShadow
            receiveShadow
            geometry={nodes.Spiral.geometry}
            material={materials.Wire}
            position={[-0.201, 7.514, -3.17]}
            visible={isPlaying || playOnce}
          />
          <group
            name="Top"
            position={[7.267, 0.295, -5.786]}
            rotation={[0.022, 1.568, 1.549]}
            visible={isPlaying || playOnce}
          >
            <mesh
              name="Cube002"
              castShadow
              receiveShadow
              geometry={nodes.Cube002.geometry}
              material={materials.front}
            />
            <mesh
              name="Cube002_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_1.geometry}
              material={materials.sides}
            />
            <mesh
              name="Cube002_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_2.geometry}
              material={materials.ends}
            />
            <mesh
              name="Cube002_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube002_3.geometry}
              material={materials.white}
            />
          </group>
          <group
            name="USBPort"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="USBPort_1"
              castShadow
              receiveShadow
              geometry={nodes.USBPort_1.geometry}
              material={materials["hUlRcbieVuIiOXG.001"]}
            />
            <mesh
              name="USBPort_2"
              castShadow
              receiveShadow
              geometry={nodes.USBPort_2.geometry}
              material={materials["kUhjpatHUvkBwfM.001"]}
            />
            <mesh
              name="USBPort_3"
              castShadow
              receiveShadow
              geometry={nodes.USBPort_3.geometry}
              material={materials["RJoymvEsaIItifI.001"]}
            />
            <mesh
              name="USBPort_4"
              castShadow
              receiveShadow
              geometry={nodes.USBPort_4.geometry}
              material={materials["AhrzSsKcKjghXhP.001"]}
            />
            <mesh
              name="USBPort_5"
              castShadow
              receiveShadow
              geometry={nodes.USBPort_5.geometry}
              material={materials["eHgELfGhsUorIYR.001"]}
            />
            <mesh
              name="USBPort_6"
              castShadow
              receiveShadow
              geometry={nodes.USBPort_6.geometry}
              material={materials["KSIxMqttXxxmOYl.001"]}
            />
            <mesh
              name="USBPort_7"
              castShadow
              receiveShadow
              geometry={nodes.USBPort_7.geometry}
              material={materials["mcPrzcBUcdqUybC.001"]}
            />
          </group>
          <group
            name="VolumeDownButton"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="VolumeDownButton_1"
              castShadow
              receiveShadow
              geometry={nodes.VolumeDownButton_1.geometry}
              material={materials["eShKpuMNVJTRrgg.001"]}
            />
            <mesh
              name="VolumeDownButton_2"
              castShadow
              receiveShadow
              geometry={nodes.VolumeDownButton_2.geometry}
              material={materials["dxCVrUCvYhjVxqy.001"]}
            />
          </group>
          <group
            name="VolumeUpButton"
            position={[-0.107, -1.051, -0.942]}
            scale={0.995}
          >
            <mesh
              name="VolumeUpButton_1"
              castShadow
              receiveShadow
              geometry={nodes.VolumeUpButton_1.geometry}
              material={materials["eShKpuMNVJTRrgg.001"]}
            />
            <mesh
              name="VolumeUpButton_2"
              castShadow
              receiveShadow
              geometry={nodes.VolumeUpButton_2.geometry}
              material={materials["dxCVrUCvYhjVxqy.001"]}
            />
          </group>
          <group
            name="wire-clip"
            position={[-0.081, 7.238, -3.23]}
            rotation={[0, 0, 0.605]}
            visible={isPlaying || playOnce}
          >
            <mesh
              name="Cube007"
              castShadow
              receiveShadow
              geometry={nodes.Cube007.geometry}
              material={materials.Plastic}
            />
            <mesh
              name="Cube007_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube007_1.geometry}
              material={materials.Metal}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/phoneAndPackAnim.glb");
