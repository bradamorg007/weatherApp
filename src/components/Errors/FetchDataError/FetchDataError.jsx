import React from 'react';
import css from './FetchDataError.module.css';
const FetchDataError = () => {
    return (
        <h1 className={css.FetchError}>Status 500 Fetch Data Error</h1>
    )
};

export default FetchDataError;