import { AnimatePresence } from "framer-motion";
import useStore from "../../hooks/useStore";
import Configurator from "../configurator/Configurator";
import Intro from "../intro/Intro";
import { motion } from "framer-motion";
import styles from "./Overlay.module.css";

const Overlay = () => {
  const { isIntro } = useStore();

  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <main>
      <AnimatePresence>
        <motion.section
          key={isIntro ? "intro" : "configurator"}
          className={styles.section}
          {...config}
        >
          {isIntro ? <Intro /> : <Configurator />}
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default Overlay;
