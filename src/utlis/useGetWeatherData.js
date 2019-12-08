import { useState, useEffect } from 'react';
import moment from 'moment';
import Fetch from './Fetch';
import useGetLocation from './useGetLocation';
import dataMapper from './dataMapper';


const useGetWeatherData = () => {

    const [weatherData, setWeatherData] = useState();
    const [location, error] = useGetLocation();

    useEffect(() => {
        if (location) {
            const controller = new AbortController();
            const endPoint = `${"https://lski-proxy-server.azurewebsites.net/weather/"}${location.latitude}/${location.longitude}`;

            Fetch(endPoint)
                .then((data) => {
                    const output = [];
                    data.data.daily.data.map((day, index) => {
                        const date = moment().add(index, 'days').format("ddd, DD MMM");
                        output.push({ ...dataMapper(day), date });
                    })
                    setWeatherData(output);
                })
                .catch((error) => {
                    console.log(error);
                });

            console.log(location);

            return (
                controller.abort()
            );
        }

    }, [location]);

    return [weatherData, error];

}

export default useGetWeatherData;
