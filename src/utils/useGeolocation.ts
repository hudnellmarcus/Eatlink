import { useState, useEffect } from 'react';

interface GeolocationState {
    latitude: number | null;
    longitude: number | null;
    error: string | null;
    isLoading: boolean;
};

export const useGeolocation = () => {
    const [state, setState] = useState<GeolocationState>({
        latitude: null,
        longitude: null,
        error: null,
        isLoading: true
    });

    useEffect(() => {
        if( !navigator.geolocation ) {
            setState(prevState => ({
                ...prevState,
                error: 'Geolocation is not supported by your browser',
                isLoading: false
            }));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                    isLoading: false
                });
            },
            (error) => {
                setState(prevState => ({
                    ...prevState,
                    error: error.message,
                    isLoading: false
                }));
            }
        );
    }, []);

    return state; 
};

