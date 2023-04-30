import "./index.css";
import { Canvas } from "@react-three/fiber";
import Chair from "./components/models/Chair";
import Overlay from "./components/overlay/Overlay";
import { Environment, OrbitControls } from "@react-three/drei";
import useStore from "./hooks/useStore";

const App = () => {
  const { isIntro } = useStore();

  return (
    <>
      <Overlay />
      <Canvas dpr={[1, 2]}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          enabled={!isIntro}
        />
        <ambientLight intensity={0.5} />
        <Chair rotation={[0, (Math.PI / 4) * -3, 0]} />
        <Environment preset="city" />
      </Canvas>
    </>
  );
};

export default App;
