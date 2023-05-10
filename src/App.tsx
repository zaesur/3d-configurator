import "./index.css";
import { Canvas } from "@react-three/fiber";
import Overlay from "./components/overlay/Overlay";
import { OrbitControls, Stage, TransformControls } from "@react-three/drei";
import useStore from "./hooks/useStore";
import Chair from "./components/models/Chair";
import { motion } from "framer-motion";
import Transformable from "./components/transformable/Transformable";
import { useEffect } from "react";

const App = () => {
  const { isIntro, target, setTarget } = useStore();
  const { matches: isBig } = window.matchMedia("(min-width: 992px)");

  useEffect(() => {
    if (isIntro) {
      setTarget(null);
    }
  }, [isIntro]);

  return (
    <>
      <Overlay />
      <motion.div
        className="canvas"
        animate={isBig && { left: isIntro ? "25%" : "0" }}
      >
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 25 }}
          onPointerMissed={() => setTarget(null)}
        >
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            enabled={!isIntro}
            maxPolarAngle={Math.PI / 2}
          />
          {target && <TransformControls object={target} />}
          <Stage adjustCamera={1.5} intensity={0.5}>
            <Transformable>
              <Chair rotation={[0, (-Math.PI / 4) * 3, 0]} />
            </Transformable>
          </Stage>
        </Canvas>
      </motion.div>
    </>
  );
};

export default App;
