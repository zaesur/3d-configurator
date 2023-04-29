import { AiOutlineArrowLeft } from "react-icons/ai";
import useStore from "../hooks/useStore";
import TextureSelect from "./TextureSelect";

const Configurator = () => {
  const { setIsIntro } = useStore();

  return (
    <section>
      <button onClick={() => setIsIntro(true)}>
        <AiOutlineArrowLeft />
        Exit
      </button>

      <TextureSelect />
    </section>
  );
};

export default Configurator;
