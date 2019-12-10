import React from 'react';
import List from '@material-ui/core/List';
import css from './NewTable.module.css';
import '../LoaderSpinner/LoadSpinner.scss';
import NewsDetails from '../NewsDetails/NewsDetails';
import FetchDataError from '../Errors/FetchDataError/FetchDataError';
import useGetNewsData from '../../utlis/useGetNewsData';

const NewsTable = () => {

    const [newsData, error] = useGetNewsData();

    if (error) {
        return <FetchDataError />
    }

    if (!newsData) {
        return <div className="loader"></div>
    }

    return (
        <List component="nav" className={css.List}>
            {newsData.map((data, index) => {
                return (
                    <NewsDetails urlToImage={data.urlToImage}
                        title={data.title}
                        url={data.url}
                        name={data.name}
                        key={index}
                        renderDivider={index < newsData.length - 1}
                    />
                );
            })}
        </List>
    );
}

export default NewsTable;