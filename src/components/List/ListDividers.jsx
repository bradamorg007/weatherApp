import React from 'react';
import List from '@material-ui/core/List';
import css from './ListDivider.module.css';
import '../LoaderSpinner/LoadSpinner.scss';
import WeatherDetails from '../weatherDetails/WeatherDetails';
import useGetWeatherData from '../../utlis/useGetWeatherData';

export default function ListDividers() {

    const [weatherData, error] = useGetWeatherData();

    if (!weatherData) {
        return <div className="loader"></div>
    }
    return (
        <List component="nav" className={css.List}>
            {weatherData.map((data, index) => {
                return (
                    <div>
                        <WeatherDetails
                            date={data.date}
                            temperature={data.temperature}
                            icon={data.icon}
                            description={data.summary}
                            probability={`${data.probability}% chance of more rain after this rain`}
                            renderDivider={index < weatherData.length - 1}
                        />
                    </div>
                );
            })}
        </List>
    );
}


