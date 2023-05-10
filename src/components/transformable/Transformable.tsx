import { PivotControls, useCursor } from "@react-three/drei";
import { FunctionComponent, ReactNode, useRef, useState } from "react";
import useStore from "../../hooks/useStore";
import { Group } from "three";

interface TransformableProps {
  children: ReactNode;
}

const Transformable: FunctionComponent<TransformableProps> = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<Group>(null);
  const { isIntro, target, setTarget } = useStore();
  useCursor(hovered);

  return (
    <group
      ref={groupRef}
      onClick={() => setTarget(groupRef.current)}
      onPointerOver={() => !isIntro && setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <PivotControls
        anchor={groupRef.current?.position.toArray()}
        activeAxes={[true, false, true]}
        visible={!isIntro && target !== null && target === groupRef.current}
      >
        {children}
      </PivotControls>
    </group>
  );
};

export default Transformable;
