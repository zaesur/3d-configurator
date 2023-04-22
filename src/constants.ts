export const materials = {
  oak: "Wood_027",
  walnut: "Wood_023",
} as const;

export type Materials = typeof materials;
export type MaterialsKey = keyof Materials;
export type MaterialsValue = Materials[MaterialsKey];
