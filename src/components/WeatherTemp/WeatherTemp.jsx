import React from 'react';
import Icon from '../Icon/Icon';
import css from './WeatherTemp.module.css'


const WeatherTemp = ({ temperature, imgName }) => {

    const temp = `${temperature}°C`;
    return (
        <div className={css.weatherTemp}>
            <Icon imgName={imgName} />
            <span className={css.text}>{temp}</span>
        </div>
    )
};

export default WeatherTemp;
