import { create } from "zustand";
import { MaterialsKey } from "../constants";

interface AppState {
  material: MaterialsKey;
  setMaterial: (material: MaterialsKey) => void;
}

const useStore = create<AppState>((set) => ({
  material: "oak",
  setMaterial: (material) => set({ material }),
}));

export default useStore;
