import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Chair } from "./components/models/Chair";
import Overlay from "./components/overlay/Overlay";
import { Stage } from "@react-three/drei";

const App = () => {
  return (
    <>
      <Canvas dpr={[1, 2]}>
        <Stage
          adjustCamera={2}
          intensity={0.5}
          shadows="contact"
          environment="city"
        >
          <Chair rotation={[0, (Math.PI / 4) * -3, 0]} />
        </Stage>
      </Canvas>
      <Overlay />
    </>
  );
};

export default App;
