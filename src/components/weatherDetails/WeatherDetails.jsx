import React from 'react';
import Divider from '@material-ui/core/Divider';
import css from './WeatherDetails.module.css'
import './WeatherDetails.css'
import ListItem from '@material-ui/core/ListItem';
import WeatherTemp from '../WeatherTemp/WeatherTemp';
import Body from '../Body/Body';


const WeatherDetails = (props) => {

    return (
        <div className="WeatherDetails">
            <ListItem button className={css.weatherDetails}>
                <div className={css.weatherText}>
                    <span className={css.date}>{props.date}</span>
                    <span className={css.description}>{props.description}</span>
                    <span className={css.probability}>{props.probability}</span>
                </div>
                <WeatherTemp imgName={props.icon} temperature={props.temperature} />
            </ListItem>
            {props.renderDivider && <Divider />}
        </div>
    );
};

export default WeatherDetails;