import useStore from "../../hooks/useStore";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Intro.module.css";
import { FunctionComponent } from "react";
import { Config } from "../overlay/Overlay";

interface IntroProps {
  config: Config;
}

const Intro: FunctionComponent<IntroProps> = ({ config }) => {
  const { setIsIntro } = useStore();

  return (
    <motion.section {...config}>
      <h1>Kangaroo</h1>

      <p>
        Designed for the Hall of the Chandigarh General Hospital and present in
        many private homes, the chair is known for the “Z” shape of its sides,
        made up of three flush elements.
      </p>

      <button onClick={() => setIsIntro(false)}>
        Customize
        <AiOutlineArrowRight />
      </button>
    </motion.section>
  );
};

export default Intro;
