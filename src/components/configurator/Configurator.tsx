import useStore from "../../hooks/useStore";
import TextureSelect from "../texture_selector/TextureSelector";
import Button from "../button/Button";
import { FunctionComponent } from "react";
import styles from "./Configurator.module.css";

const Configurator: FunctionComponent = () => {
  const { setIsIntro, setTarget } = useStore();

  return (
    <article className={styles.article}>
      <Button label="Exit" onClick={() => setIsIntro(true)} />
      <TextureSelect />
    </article>
  );
};

export default Configurator;
