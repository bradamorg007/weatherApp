import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <img
                className={css.ANDLogo}
                src="https://static.andigital.com/wp-content/uploads/2017/05/02163341/AND_LOGO_RGB_ON_WHITE.png"
                alt="AND Digital" />
            <span className={css.HeaderText}>Header</span>
        </div>

    )
};

export default Header