import { MATERIALS, MaterialsKey, MaterialsValue } from "../constants";
import useStore from "../hooks/useStore";
import styles from "./TextureSelect.module.css";

const TextureSelect = () => {
  const { selectedMaterial, setSelectedMaterial } = useStore();

  return (
    <div className={styles.container}>
      {(Object.entries(MATERIALS) as [MaterialsKey, MaterialsValue][]).map(
        ([material, materialFilename]) => (
          <img
            alt={material}
            key={material}
            className={selectedMaterial === material ? styles.selected : ""}
            src={`textures/${materialFilename}_basecolor.jpg`}
            onClick={() => setSelectedMaterial(material)}
          />
        )
      )}
    </div>
  );
};

export default TextureSelect;
