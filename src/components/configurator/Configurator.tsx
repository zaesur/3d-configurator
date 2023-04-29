import { AiOutlineArrowLeft } from "react-icons/ai";
import useStore from "../../hooks/useStore";
import TextureSelect from "../texture_selector/TextureSelector";

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
