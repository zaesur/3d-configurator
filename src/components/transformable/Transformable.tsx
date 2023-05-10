import { useCursor } from "@react-three/drei";
import { FunctionComponent, ReactNode, useRef, useState } from "react";
import useStore from "../../hooks/useStore";
import { Group } from "three";

interface TransformableProps {
  children: ReactNode;
}

const Transformable: FunctionComponent<TransformableProps> = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<Group>(null!);
  const { setTarget } = useStore();
  useCursor(hovered);

  return (
    <group
      ref={groupRef}
      onClick={() => setTarget(groupRef.current)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children}
    </group>
  );
};

export default Transformable;
