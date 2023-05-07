import useStore from "../../hooks/useStore";
import TextureSelect from "../texture_selector/TextureSelector";
import Button from "../button/Button";
import { FunctionComponent } from "react";

const Configurator: FunctionComponent = () => {
  const { setIsIntro } = useStore();

  return (
    <article>
      <Button label="Exit" onClick={() => setIsIntro(true)} />
      <TextureSelect />
    </article>
  );
};

export default Configurator;
