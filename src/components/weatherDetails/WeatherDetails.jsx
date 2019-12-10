import React from 'react';
import Divider from '@material-ui/core/Divider';
import css from './WeatherDetails.module.css'
import './WeatherDetails.css'
import ListItem from '@material-ui/core/ListItem';
import WeatherTemp from '../WeatherTemp/WeatherTemp';


const WeatherDetails = ({ key, date, description, temperature, probability, icon, renderDivider }) => {

    return (
        <div className="WeatherDetails">
            <ListItem button className={css.weatherDetails} key={key}>
                <div className={css.weatherText}>
                    <span className={css.date}>{date}</span>
                    <span className={css.description}>{description}</span>
                    <span className={css.probability}>{probability}</span>
                </div>
                <WeatherTemp imgName={icon} temperature={temperature} />
            </ListItem>
            {renderDivider && <Divider />}
        </div>
    );
};

export default WeatherDetails;