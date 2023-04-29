import useStore from "../hooks/useStore";
import Configurator from "./Configurator";
import Intro from "./Intro";

const Overlay = () => {
  const { isIntro: intro } = useStore();

  return <main>{intro ? <Intro /> : <Configurator />}</main>;
};

export default Overlay;
