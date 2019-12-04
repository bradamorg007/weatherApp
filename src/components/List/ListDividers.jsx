import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import css from './ListDivider.module.css';
import moment from 'moment';
import Fetch from '../../utlis/Fetch';
import WeatherDetails from '../weatherDetails/WeatherDetails';
import useGetLocation from '../../utlis/useGetLocation';
import dataMapper from '../../utlis/dataMapper';
import { loadOptions } from '@babel/core';

// const useWeekArranger = () => {

//     const [weekInfo, setWeekInfo] = useState([]);

//     useEffect(() => {

//         let data = []
//         for (let i = 0; i < 8; i++) {
//             data.push(moment().add(i, 'days').format("ddd, DD MMM"))
//         }

//         setWeekInfo(data);
//     }, []);

//     return [weekInfo];
// };


export default function ListDividers() {

    const [weatherData, setWeatherData] = useState();
    //git const [weekInfo] = useWeekArranger();
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

    if (!weatherData) {
        return null
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


{/* <ListItem button>
<span>HEllo</span>
</ListItem>
<Divider />
<ListItem button divider>
<ListItemText primary="Drafts" />
</ListItem>
<ListItem button>
<ListItemText primary="Trash" />
</ListItem>
<Divider light />
<ListItem button>
<ListItemText primary="Spam" />
</ListItem> */}

{/* <span>{data}</span>
<span >{"Rain all day fam"}</span>
<span >{"60% chance of more rain after this rain"}</span> */}
{/* <Divider /> */ }