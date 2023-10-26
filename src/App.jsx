import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./index.css";

function App() {
  return (
    <Canvas shadows camera={{ position: [-0.935, 0.548, -11.756], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
