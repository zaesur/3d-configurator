import { create } from "zustand";
import { MaterialsKey } from "../constants";

interface AppState {
  isIntro: boolean;
  setIsIntro: (value: boolean) => void;
  selectedMaterial: MaterialsKey;
  setSelectedMaterial: (material: MaterialsKey) => void;
}

const useStore = create<AppState>((set) => ({
  isIntro: true,
  setIsIntro: (intro) => set({ isIntro: intro }),
  selectedMaterial: "oak",
  setSelectedMaterial: (material) => set({ selectedMaterial: material }),
}));

export default useStore;
