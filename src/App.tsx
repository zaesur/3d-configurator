import "./index.css";
import { Canvas } from "@react-three/fiber";
import Overlay from "./components/overlay/Overlay";
import {
  Bounds,
  Center,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import useStore from "./hooks/useStore";
import Chair from "./components/models/Chair";
import { motion } from "framer-motion-3d";

const App = () => {
  const { isIntro } = useStore();

  return (
    <>
      <Overlay />
      <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
        <motion.group animate={{ x: isIntro ? 1 : 0, type: "spring" }}>
          <PresentationControls
            speed={3}
            cursor={true}
            enabled={!isIntro}
            polar={[0, Math.PI / 2]}
          >
            <Bounds fit margin={1.5}>
              <Center>
                <Chair rotation={[0, (Math.PI / 4) * -3, 0]} />
              </Center>
            </Bounds>
          </PresentationControls>
        </motion.group>

        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
      </Canvas>
    </>
  );
};

export default App;
