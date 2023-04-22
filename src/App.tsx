import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Chair } from "./components/Chair";
import "./index.css";
import Overlay from "./components/Overlay";

const App = () => {
  return (
    <>
      <Overlay />

      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault>
          <directionalLight />
        </PerspectiveCamera>
        <OrbitControls enablePan={false} />

        <Bounds fit clip margin={2}>
          <Center>
            <Chair />
          </Center>
        </Bounds>
      </Canvas>
    </>
  );
};

export default App;
