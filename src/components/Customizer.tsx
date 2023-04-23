import type { CSSProperties } from "react";
import { MATERIALS, MaterialsKey, MaterialsValue } from "../constants";
import useStore from "../hooks/useStore";

const customizerStyle: CSSProperties = {
  position: "absolute",
  width: "100%",
  bottom: "10%",
  gap: "10px",
  display: "flex",
  justifyContent: "center",
};

const imgStyle: CSSProperties = {
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  transition: "box-shadow 0.1s",
};

const Customizer = () => {
  const { material, setMaterial } = useStore();

  return (
    <div style={customizerStyle}>
      {(Object.entries(MATERIALS) as [MaterialsKey, MaterialsValue][]).map(
        ([materialName, materialFilename]) => (
          <img
            alt={materialName}
            key={materialName}
            style={{
              boxShadow:
                material === materialName ? "0 0 5px 5px #ffffff" : undefined,
              ...imgStyle,
            }}
            src={`textures/${materialFilename}_basecolor.jpg`}
            onClick={() => setMaterial(materialName)}
          />
        )
      )}
    </div>
  );
};

export default Customizer;
