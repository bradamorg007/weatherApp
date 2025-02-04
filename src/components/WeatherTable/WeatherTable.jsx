import React from 'react';
import List from '@material-ui/core/List';
import css from './WeatherTable.module.css';
import '../LoaderSpinner/LoadSpinner.scss';
import WeatherDetails from '../weatherDetails/WeatherDetails';
import useGetWeatherData from '../../utlis/useGetWeatherData';
import FetchDataError from '../Errors/FetchDataError/FetchDataError';

export default function WeatherTable() {

    const [weatherData, error] = useGetWeatherData();

    if (error) {
        return <FetchDataError />
    }

    if (!weatherData) {
        return <div className="loader"></div>
    }
    return (
        <List component="nav" className={css.List}>
            {weatherData.map((data, index) => {
                return (
                    <WeatherDetails
                        date={data.date}
                        temperature={data.temperature}
                        icon={data.icon}
                        description={data.summary}
                        probability={`${data.probability}% chance of more rain`}
                        key={index}
                        renderDivider={index < weatherData.length - 1}
                    />
                );
            })}
        </List>
    );
}


