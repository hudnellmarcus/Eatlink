import { create } from "zustand";

export interface Preference {
    id: number;
    name: string;
}; 

interface UserPreferences {
    dietPreferences: Preference[];
    allergies: Preference[];
};

interface UserPreferencesStore extends UserPreferences {
    setDietPreferences: (preferences: Preference[]) => void;
    setAllergies: (allergies: Preference[]) => void;
    resetPreferences: () => void;
};

const useUserPreferencesStore = create<UserPreferencesStore>((set) => ({
    dietPreferences: [],
    allergies: [],
    setDietPreferences: (preferences) => set({ dietPreferences: preferences }),
    setAllergies: (allergies) => set({ allergies }),
    resetPreferences: () => set({ dietPreferences: [], allergies: [] }),
}));

export default useUserPreferencesStore;