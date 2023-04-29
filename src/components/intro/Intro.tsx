import useStore from "../../hooks/useStore";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Intro.module.css";

const Intro = () => {
  const { setIsIntro } = useStore();

  return (
    <section>
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
    </section>
  );
};

export default Intro;
