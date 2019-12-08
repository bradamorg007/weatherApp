import React from 'react';
import css from '../WeatherTemp/WeatherTemp.module.css';
import clearDay from '../../resources/weatherIcons/clear-day.png';
import clearNight from '../../resources/weatherIcons/clear-night.png';
import cloudy from '../../resources/weatherIcons/cloudy.png';
import fog from '../../resources/weatherIcons/fog.png';
import partlyCloudyDay from '../../resources/weatherIcons/partly-cloudy-day.png';
import rain from '../../resources/weatherIcons/rain.png';
import sleet from '../../resources/weatherIcons/sleet.png';
import snow from '../../resources/weatherIcons/snow.png';
import unknown from '../../resources/weatherIcons/unknown.png';
import wind from '../../resources/weatherIcons/wind.png';

const Icon = (props) => {
    let image = null;
    const alt = `weather icon: ${props.imgName}`;
    switch (props.imgName) {
        case 'clear-day':
            image = clearDay;
            break;
        case 'clear-night':
            image = clearNight;
            break;
        case 'cloudy':
            image = cloudy;
            break;
        case 'fog':
            image = fog;
            break;
        case 'partly-cloudy-day':
            image = partlyCloudyDay;
            break;
        case 'rain':
            image = rain;
            break;
        case 'sleet':
            image = sleet;
            break;
        case 'snow':
            image = snow;
            break;
        case 'unknown':
            image = unknown;
            break;
        case 'wind':
            image = wind;
            break;
        default:
            image = unknown;
            break;
    }
    return (
        <img className={css.img} src={image} alt={alt} />
    )
}

export default Icon;