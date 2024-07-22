export interface DietPreference {
    id: number;
    name: string;
  }

  export interface GeolocationState {
    latitude: number | null;
    longitude: number | null;
    error: string | null;
    isLoading: boolean;
};

export interface Preference {
    id: number;
    name: string;
}; 

interface UserPreferences {
    dietPreferences: Preference[];
    allergies: Preference[];
};

export interface UserPreferencesStore extends UserPreferences {
    setDietPreferences: (preferences: Preference[]) => void;
    setAllergies: (allergies: Preference[]) => void;
    resetPreferences: () => void;
};

interface Category {
    alias: string;
    title: string;
}
 export interface Restaurant {
    id: string
    name: string;
    image_url: string;
    rating: number;
    categories: Category[];
    reviews?: number;
    distance: number;
    price?: number;
    deliveryTime?: string;
    deliveryFee?: number;
    deliveryMethod?: string;
    deliveryType?: string;
    deliveryOptions?: string[];
    paymentOptions?: string[];
    location?: string;
    description?: string;
    menu?: string[];
    tags?: string[];
    images?: string[];
    contact: string;
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
    twitch?: string;
    snapchat?: string;
    whatsapp?: string;
    telegram?: string;
    viber?: string;
    skype?: string;
    signal?: string;
    messenger?: string;
    wechat?: string;
    line?: string;
  }

