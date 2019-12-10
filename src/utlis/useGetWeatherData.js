import { useState, useEffect } from 'react';
import moment from 'moment';
import Fetch from './Fetch';
import useGetLocation from './useGetLocation';
import { mapWeather } from './dataMapper';


const useGetWeatherData = () => {

    const [weatherData, setWeatherData] = useState();
    const [error, setError] = useState();
    const [location, locError] = useGetLocation();

    if (locError) {
        setError(locError)
    }

    useEffect(() => {
        if (location) {
            const controller = new AbortController();
            const endPoint = `${"https://lski-proxy-server.azurewebsites.net/weather/"}${location.latitude}/${location.longitude}`;

            Fetch(endPoint)
                .then((data) => {
                    const output = [];
                    data.data.daily.data.map((day, index) => {
                        const date = moment().add(index, 'days').format("ddd, DD MMM");
                        output.push({ ...mapWeather(day), date });
                    })
                    setWeatherData(output);
                })
                .catch((error) => {
                    console.log(error);
                    setError(error);
                });

            return (
                controller.abort()
            );
        }

    }, [location]);

    return [weatherData, error];

}

export default useGetWeatherData;
