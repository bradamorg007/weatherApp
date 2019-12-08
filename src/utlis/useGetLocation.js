import { useState, useEffect } from 'react';

const useGetLocation = () => {


    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        const successFunc = (pos) => {
            var crd = pos.coords;
            setData({ latitude: crd.latitude, longitude: crd.longitude })
        }

        const errorFunc = (err) => {
            setError(error);
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }


        navigator
            .geolocation
            .getCurrentPosition(successFunc, errorFunc, options);


    }, []);

    return [data, error];
};

export default useGetLocation;

