import "./index.css";
import { Canvas } from "@react-three/fiber";
import Chair from "./components/models/Chair";
import Overlay from "./components/overlay/Overlay";
import { Environment } from "@react-three/drei";

const App = () => {
  return (
    <>
      <Overlay />
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Chair rotation={[0, (Math.PI / 4) * -3, 0]} />
        <Environment preset="city" />
      </Canvas>
    </>
  );
};

export default App;
