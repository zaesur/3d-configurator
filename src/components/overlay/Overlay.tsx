import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import useStore from "../../hooks/useStore";
import Configurator from "../configurator/Configurator";
import Intro from "../intro/Intro";
import "./Overlay.module.css";

export type Config = Pick<
  HTMLMotionProps<"section">,
  "initial" | "animate" | "exit"
>;

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
        {isIntro ? <Intro config={config} /> : <Configurator config={config} />}
      </AnimatePresence>
    </main>
  );
};

export default Overlay;
