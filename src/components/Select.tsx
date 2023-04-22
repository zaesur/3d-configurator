import { useBounds } from "@react-three/drei";
import type { FunctionComponent, ReactElement, ReactNode } from "react";

interface SelectProps {
  children?: ReactElement | ReactElement[];
}

const Select: FunctionComponent<SelectProps> = ({ children }) => {
  const api = useBounds();

  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        api.refresh(e.object).fit();
      }}
      onPointerMissed={() => {
        api.refresh().fit();
      }}
    >
      {children}
    </group>
  );
};

export default Select;
