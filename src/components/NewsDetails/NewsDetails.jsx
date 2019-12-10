import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import css from './NewsDetails.module.css';


const NewsDetails = ({ url, urlToImage, name, title, renderDivider }) => {

    return (

        <div>
            <ListItem button component="a" href={url}>
                <div className={css.newDetails}>
                    <img src={urlToImage} alt={name} className={css.Image} />
                    <div className={css.NewsTexts}>
                        <span className={css.UrlText}>{title}</span>
                        <span className={css.Name}>{name}</span>
                    </div>
                </div>
            </ListItem>
            {renderDivider && <Divider />}
        </div>


    )
}

export default NewsDetails;