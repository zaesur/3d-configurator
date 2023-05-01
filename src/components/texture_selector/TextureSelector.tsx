import {
  MATERIALS,
  MaterialsKey,
  MaterialsValue,
} from "../../hooks/useMaterial";
import useStore from "../../hooks/useStore";
import styles from "./TextureSelector.module.css";

const TextureSelector = () => {
  const { selectedMaterial, setSelectedMaterial } = useStore();

  return (
    <div className={styles.container}>
      {(Object.entries(MATERIALS) as [MaterialsKey, MaterialsValue][]).map(
        ([material, { color }]) => (
          <img
            alt={material}
            key={material}
            className={selectedMaterial === material ? styles.selected : ""}
            src={`textures/${color}`}
            onClick={() => setSelectedMaterial(material)}
          />
        )
      )}
    </div>
  );
};

export default TextureSelector;
