import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { Material, MeshStandardMaterial } from "three";
import { MaterialsValue } from "../constants";

const useMaterial = (material: MaterialsValue): Material => {
  const textures = useTexture([
    `textures/${material}_basecolor.jpg`,
    `textures/${material}_normal.jpg`,
    `textures/${material}_roughness.jpg`,
    `textures/${material}_ambientOcclusion.jpg`,
  ]);

  return useMemo(() => {
    const material = new MeshStandardMaterial();

    material.map = textures[0];
    material.normalMap = textures[1];
    material.roughnessMap = textures[2];
    material.aoMap = textures[3];

    return material;
  }, [textures]);
};

export default useMaterial;
