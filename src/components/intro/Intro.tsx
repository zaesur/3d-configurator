import useStore from "../../hooks/useStore";
import styles from "./Intro.module.css";
import { FunctionComponent } from "react";
import Button from "../button/Button";

const Intro: FunctionComponent = () => {
  const { setIsIntro } = useStore();

  return (
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
  );
};

export default Intro;
