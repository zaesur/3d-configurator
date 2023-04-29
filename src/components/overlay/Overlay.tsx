import useStore from "../../hooks/useStore";
import Configurator from "../configurator/Configurator";
import Intro from "../intro/Intro";
import "./Overlay.module.css";

const Overlay = () => {
  const { isIntro: intro } = useStore();

  return <main>{intro ? <Intro /> : <Configurator />}</main>;
};

export default Overlay;
