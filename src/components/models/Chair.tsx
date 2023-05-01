import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group, MeshStandardMaterial } from "three";
import useMaterial from "../../hooks/useMaterial";
import useStore from "../../hooks/useStore";
import { MATERIALS } from "../../constants";
import { forwardRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Traverso_Basso_HP: THREE.Mesh;
    Rete001_Seduta: THREE.Mesh;
    Rete001_Schienale: THREE.Mesh;
    Cordino_02: THREE.Mesh;
    Gamba_HP: THREE.Mesh;
    Cordino: THREE.Mesh;
    Traverso_Alto_HP: THREE.Mesh;
    Traverso_laterale_1_HP: THREE.Mesh;
    Traverso_posteriore_1_HP: THREE.Mesh;
    Traverso_frontale_1_HP: THREE.Mesh;
    Traverso_posteriore_2_HP: THREE.Mesh;
    Traverso_laterale_2_HP: THREE.Mesh;
    Traverso_frontale_2_HP: THREE.Mesh;
  };
};

const defaultMaterial = new MeshStandardMaterial({ color: "#DEB887" });

export default forwardRef<Group, JSX.IntrinsicElements["group"]>(function Chair(
  props,
  ref
) {
  const { nodes } = useGLTF("models/chair.glb") as GLTFResult;
  const { selectedMaterial } = useStore();
  const woodMaterial = useMaterial(selectedMaterial);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Traverso_Basso_HP.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.Rete001_Seduta.geometry}
        material={defaultMaterial}
      />
      <mesh
        geometry={nodes.Rete001_Schienale.geometry}
        material={defaultMaterial}
      />
      <mesh geometry={nodes.Cordino_02.geometry} material={defaultMaterial} />
      <mesh geometry={nodes.Gamba_HP.geometry} material={woodMaterial} />
      <mesh geometry={nodes.Cordino.geometry} material={defaultMaterial} />
      <mesh
        geometry={nodes.Traverso_Alto_HP.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.Traverso_laterale_1_HP.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.Traverso_posteriore_1_HP.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.Traverso_frontale_1_HP.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.Traverso_posteriore_2_HP.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.Traverso_laterale_2_HP.geometry}
        material={woodMaterial}
      />
      <mesh
        geometry={nodes.Traverso_frontale_2_HP.geometry}
        material={woodMaterial}
      />
    </group>
  );
});

useGLTF.preload("/models/chair.glb");
