import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import "./index.css";

function App() {
  return (
    <Canvas camera={{ position: [0.0258, 0.0176, -0.7616], fov: 30 }}>
      <color attach="background" args={["#9FE9EE"]} />
      <Experience />
    </Canvas>
  );
}

export default App;
