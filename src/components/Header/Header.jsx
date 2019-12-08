import React from 'react';
import css from './Header.module.css';
import LogoText from '../LogoText/LogoText';

const Header = () => {
    return (

        <LogoText divName={css.Header}
            imgName={css.HeaderLogo}
            spanName={css.HeaderText}
            text="News & Weather"
        />
    )
};

export default Header