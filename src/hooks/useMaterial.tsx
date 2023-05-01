import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { Material, MeshPhongMaterial } from "three";

export const MATERIALS = Object.freeze({
  // Disable old textures.
  // oak: {
  //   color: "Wood_027_basecolor.jpg",
  //   normal: "Wood_027_normal.jpg",
  //   roughness: "Wood_027_roughness.jpg",
  //   ao: "Wood_027_ambientOcclusion.jpg",
  // },
  // walnut: {
  //   color: "Wood_023_basecolor.jpg",
  //   normal: "Wood_023_normal.jpg",
  //   roughness: "Wood_023_roughness.jpg",
  //   ao: "Wood_023_ambientOcclusion.jpg",
  // },
  oak1: {
    color: "wood-137_oak-curl-240x240cm-color1_d.jpeg",
    normal: "wood-137_oak-curl-240x240cm_n.jpeg",
    specular: "wood-137_oak-curl-240x240cm_s.jpeg",
  },
  oak2: {
    color: "wood-137_oak-curl-240x240cm-color2_d.jpeg",
    normal: "wood-137_oak-curl-240x240cm_n.jpeg",
    specular: "wood-137_oak-curl-240x240cm_s.jpeg",
  },
  oak3: {
    color: "wood-137_oak-curl-240x240cm-color3_d.jpeg",
    normal: "wood-137_oak-curl-240x240cm_n.jpeg",
    specular: "wood-137_oak-curl-240x240cm_s.jpeg",
  },
} as const);

export type Materials = typeof MATERIALS;
export type MaterialsKey = keyof Materials;
export type MaterialsValue = Materials[MaterialsKey];

const useMaterial = (material: MaterialsKey): Material => {
  const textures = useTexture(
    Object.values(MATERIALS[material]).map((filename) => `textures/${filename}`)
  );

  return useMemo(() => {
    const material = new MeshPhongMaterial();

    material.map = textures[0];
    material.normalMap = textures[1];
    material.specularMap = textures[2];

    return material;
  }, [textures]);
};

export default useMaterial;
