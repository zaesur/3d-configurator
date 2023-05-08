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
        ([materialName, material]) => (
          <img
            alt={materialName}
            key={materialName}
            className={selectedMaterial === materialName ? styles.selected : ""}
            src={`textures/${material.textures.color}`}
            onClick={() => setSelectedMaterial(materialName)}
          />
        )
      )}
    </div>
  );
};

export default TextureSelector;
