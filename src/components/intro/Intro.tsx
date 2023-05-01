import useStore from "../../hooks/useStore";
import { motion } from "framer-motion";
import styles from "./Intro.module.css";
import { FunctionComponent } from "react";
import { Config } from "../overlay/Overlay";
import Button from "../button/Button";

interface IntroProps {
  config: Config;
}

const Intro: FunctionComponent<IntroProps> = ({ config }) => {
  const { setIsIntro } = useStore();

  return (
    <motion.section {...config}>
      <article>
        <h1>Kangaroo Armchair</h1>

        <div className={styles.container}>
          <h2>An hommage to Pierre Jeanneret</h2>
          <p>
            Designed for the Hall of the Chandigarh General Hospital and present
            in many private homes, the chair is known for the “Z” shape of its
            sides, made up of three flush elements.
          </p>
          <Button label="Customize" onClick={() => setIsIntro(false)} />
        </div>
      </article>
    </motion.section>
  );
};

export default Intro;
