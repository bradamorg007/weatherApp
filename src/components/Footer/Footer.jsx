import React from 'react';
import css from './Footer.module.css';
import LogoText from '../LogoText/LogoText';

const Footer = () => {
    return (
        <LogoText divName={css.Footer}
            imgName={css.FooterLogo}
            spanName={css.FooterText}
            text="Digital"
        />
    )
};

export default Footer