import "./index.css";
import { Canvas } from "@react-three/fiber";
import Overlay from "./components/overlay/Overlay";
import { OrbitControls, Stage } from "@react-three/drei";
import useStore from "./hooks/useStore";
import Chair from "./components/models/Chair";
import { motion } from "framer-motion";
import Transformable from "./components/transformable/Transformable";
import { useEffect } from "react";

const App = () => {
  const { isIntro, target, setTarget } = useStore();
  const { matches: isBig } = window.matchMedia("(min-width: 992px)");

  useEffect(() => {
    setTarget(isIntro ? null : target);
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
          camera={{ fov: 25, position: [0, 2, 5] }}
          onPointerMissed={() => setTarget(null)}
        >
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom={false}
            enabled={!isIntro}
            maxPolarAngle={Math.PI / 2}
          />

          <Transformable>
            <Chair position={[1, 0, 0]} rotation={[0, (-Math.PI / 4) * 3, 0]} />
          </Transformable>

          <Transformable>
            <Chair position={[-1, 0, 0]} />
          </Transformable>
        </Canvas>
      </motion.div>
    </>
  );
};

export default App;
