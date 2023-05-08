import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { Material, MeshPhongMaterial, MeshStandardMaterial } from "three";

export const MATERIALS = Object.freeze({
  oak: {
    textures: {
      color: "Wood_027_basecolor.jpg",
      normal: "Wood_027_normal.jpg",
      roughness: "Wood_027_roughness.jpg",
      ao: "Wood_027_ambientOcclusion.jpg",
    },
    rotation: Math.PI / 2,
  },
  walnut: {
    textures: {
      color: "Wood_023_basecolor.jpg",
      normal: "Wood_023_normal.jpg",
      roughness: "Wood_023_roughness.jpg",
      ao: "Wood_023_ambientOcclusion.jpg",
    },
    rotation: 0,
  },
} as const);

export type Materials = typeof MATERIALS;
export type MaterialsKey = keyof Materials;
export type MaterialsValue = Materials[MaterialsKey];

const useMaterial = (materialName: MaterialsKey): Material => {
  const chosenMaterial = MATERIALS[materialName];
  const textures = useTexture(
    Object.values(chosenMaterial.textures).map(
      (filename) => `textures/${filename}`
    )
  );

  return useMemo(() => {
    const material = new MeshStandardMaterial();

    textures.forEach((texture) => {
      texture.center.set(0.5, 0.5);
      texture.rotation = chosenMaterial.rotation;
    });

    material.map = textures[0];
    material.normalMap = textures[1];
    material.roughnessMap = textures[2];
    material.aoMap = textures[3];

    return material;
  }, [textures]);
};

export default useMaterial;
