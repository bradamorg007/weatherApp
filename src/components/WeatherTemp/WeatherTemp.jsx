import React from 'react';
import css from './WeatherTemp.module.css'
import rainImg from '../../resources/weatherIcons/rain.png';


const WeatherTemp = (props) => {

    const src = `resources/weatherIcons/${props.imgName}.png`;
    const alt = `weather icon: ${props.imgName}`;


    return (
        <div className={css.weatherTemp}>
            <img className={css.img} src={rainImg} alt={alt} />
            <span className={css.text}>19°C</span>
        </div>
    );
};

export default WeatherTemp;
