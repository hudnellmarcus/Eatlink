import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
console.log('API_URL:', API_URL);

if (!API_URL) {
    console.error('API_URL is not defined. Please check your .env file.');
  }

interface Location {
    latitude: number;
    longitude: number;
};

interface getNearbyRestaurantsParams {
    location: Location; 
};

/* interface PreferencesSubmissionData {
    dietPreferences: string[];
    allergies: string[];
    latitude: number;
    longitude: number;
}; */



/* export const submitPreferences = async (data: PreferencesSubmissionData) => {
    try {
        const response = await axios.post('/api/submit-preferences', data);
        return response.data;
    } catch (error) {
        console.error('Error submitting preferences:', error);
        throw error;
    };
}; 
*/

export const getNearbyRestaurants = async ({location }: getNearbyRestaurantsParams) => {
    const url = `${API_URL}/api/nearby-restaurants`;
    console.log('Full URL:', url);


    try {
        const response = await axios.post(`${API_URL}/api/nearby-restaurants`, { location });
        return response.data;
    } catch (error) {
        console.error('Error fetching nearby restaurants:', error);
        throw error;
    }
}; 