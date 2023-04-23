import type { CSSProperties } from "react";
import { MaterialsKey, MATERIALS } from "../constants";
import useStore from "../hooks/useStore";
import Customizer from "./Customizer";

const headerStyle: CSSProperties = {
  left: "2em",
  position: "absolute",
  fontFamily: "Prata",
  fontWeight: "normal",
  lineHeight: "0.9",
  fontSize: "96px",
  color: "#23282d",
};

const Overlay = () => {
  return (
    <div className="overlay">
      <h1 style={headerStyle}>
        Grab
        <br />a seat
      </h1>

      <Customizer />
    </div>
  );
};

export default Overlay;
