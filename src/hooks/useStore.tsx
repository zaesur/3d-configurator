import { create } from "zustand";
import { MATERIALS, MaterialsKey } from "./useMaterial";
import { Group } from "three";

interface AppState {
  isIntro: boolean;
  setIsIntro: (value: boolean) => void;

  selectedMaterial: MaterialsKey;
  setSelectedMaterial: (material: MaterialsKey) => void;

  target: Group | null;
  setTarget: (target: Group | null) => void;
}

const useStore = create<AppState>((set) => ({
  isIntro: true,
  setIsIntro: (intro) => set({ isIntro: intro }),

  selectedMaterial: Object.keys(MATERIALS).reverse()[0] as MaterialsKey,
  setSelectedMaterial: (material) => set({ selectedMaterial: material }),

  target: null,
  setTarget: (target) => set({ target }),
}));

export default useStore;
