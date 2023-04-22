import type { CSSProperties } from "react";
import { MaterialsKey, materials } from "../constants";
import useStore from "../hooks/useStore";

const headerStyle: CSSProperties = {
  left: "2em",
  position: "absolute",
  fontFamily: "Prata",
  fontWeight: "normal",
  lineHeight: "0.9",
  fontSize: "96px",
  zIndex: 3,
  color: "#23282d",
};

const Overlay = () => {
  const { setMaterial } = useStore();

  return (
    <>
      <h1 style={headerStyle}>
        Grab
        <br />a seat
      </h1>

      {(Object.keys(materials) as MaterialsKey[]).map((material) => (
        <button key={material} onClick={() => setMaterial(material)}>
          {material}
        </button>
      ))}
    </>
  );
};

export default Overlay;
