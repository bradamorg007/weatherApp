import React from 'react';
import css from './Header.module.css';
import LogoText from '../LogoText/LogoText';
import NavBar from '../Navbar/NavBar';


const Header = () => {
    return (
        <header>
            <LogoText divName={css.Header}
                imgName={css.HeaderLogo}
                spanName={css.HeaderText}
                text="News & Weather"
            />
            <NavBar />
        </header>
    )
};

export default Header