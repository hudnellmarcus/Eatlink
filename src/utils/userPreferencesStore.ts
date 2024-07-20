import { create } from "zustand";
import { UserPreferencesStore } from "../types/types";

const useUserPreferencesStore = create<UserPreferencesStore>((set) => ({
    dietPreferences: [],
    allergies: [],
    setDietPreferences: (preferences) => set({ dietPreferences: preferences }),
    setAllergies: (allergies) => set({ allergies }),
    resetPreferences: () => set({ dietPreferences: [], allergies: [] }),
}));

export default useUserPreferencesStore;