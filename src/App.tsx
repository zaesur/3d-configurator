import "./index.css";
import { Canvas } from "@react-three/fiber";
import Overlay from "./components/overlay/Overlay";
import { OrbitControls, Stage } from "@react-three/drei";
import useStore from "./hooks/useStore";
import Chair from "./components/models/Chair";
import { motion } from "framer-motion";

const App = () => {
  const { isIntro } = useStore();
  const { matches: isBig } = window.matchMedia("(min-width: 992px)");

  return (
    <>
      <Overlay />
      <motion.div
        className="canvas"
        animate={isBig && { left: isIntro ? "25%" : "0" }}
      >
        <Canvas dpr={[1, 2]} camera={{ fov: 25 }}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enabled={!isIntro}
            maxPolarAngle={Math.PI / 2}
          />
          <Stage adjustCamera={1.5} intensity={0.5}>
            <Chair rotation={[0, (-Math.PI / 4) * 3, 0]} />
          </Stage>
        </Canvas>
      </motion.div>
    </>
  );
};

export default App;
