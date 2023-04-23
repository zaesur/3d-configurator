export const MATERIALS = Object.freeze({
  oak: "Wood_027",
  walnut: "Wood_023",
} as const);

export type Materials = typeof MATERIALS;
export type MaterialsKey = keyof Materials;
export type MaterialsValue = Materials[MaterialsKey];
