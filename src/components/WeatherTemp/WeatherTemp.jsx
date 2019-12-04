import React from 'react';
import rainImg from '../../resources/weatherIcons/rain.png';
import Icon from '../Icon/Icon';
import css from './WeatherTemp.module.css'



const WeatherTemp = (props) => {


    const temperature = `${props.temperature}°C`;
    return (
        <div className={css.weatherTemp}>
            <Icon imgName={props.imgName} />
            <span className={css.text}>{temperature}</span>
        </div>
    )
};

export default WeatherTemp;
