import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Chair } from "./components/Chair";
import Overlay from "./components/Overlay";
import { OrbitControls, Stage } from "@react-three/drei";

const App = () => {
  return (
    <>
      <Overlay />

      <Canvas dpr={[1, 2]}>
        <OrbitControls maxPolarAngle={Math.PI / 2} />

        <Stage
          adjustCamera={2}
          intensity={0.5}
          shadows="contact"
          environment="city"
        >
          <Chair rotation={[0, (Math.PI / 4) * -3, 0]} />
        </Stage>
      </Canvas>
    </>
  );
};

export default App;
