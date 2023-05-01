import useStore from "../../hooks/useStore";
import TextureSelect from "../texture_selector/TextureSelector";
import Button from "../button/Button";
import { Config } from "../overlay/Overlay";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import "./Configurator.module.css";

interface ConfiguratorProps {
  config: Config;
}

const Configurator: FunctionComponent<ConfiguratorProps> = ({ config }) => {
  const { setIsIntro } = useStore();

  return (
    <motion.section {...config}>
      <Button label="Exit" onClick={() => setIsIntro(true)} />
      <TextureSelect />
    </motion.section>
  );
};

export default Configurator;
