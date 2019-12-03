import React, { useState, useEffect } from 'react';

const useGetLocation = () => {


    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function successFunc(pos) {
            var crd = pos.coords;
            setData({ latitude: crd.latitude, longitude: crd.longitude })
        }

        function errorFunc(err) {
            setError(error);
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        const getLoc = async () => {
            await navigator
                .geolocation
                .getCurrentPosition(successFunc, errorFunc, options);
        }
        getLoc();

    }, []);

    return [data, error];
};

export default useGetLocation;

