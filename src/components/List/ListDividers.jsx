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
    //const [weekInfo] = useWeekArranger();
    const [location, error] = useGetLocation();

    useEffect(() => {
        if (location) {
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
            // setWeatherData(data);
            console.log(location);
        }
    }, [location]);

    return (
        <List component="nav" className={css.List}>

            {weekInfo.map((data, index) => {
                return (
                    <div>
                        <WeatherDetails
                            date={data}
                            description={"Rain all day fam"}
                            probability={"60% chance of more rain after this rain"}
                            renderDivider={index < weekInfo.length - 1}

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