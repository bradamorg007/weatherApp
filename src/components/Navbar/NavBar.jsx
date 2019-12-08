import React from 'react';
import css from './NavBar.module.css';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className={css.NavBar}>
            <Link to="/">News</Link>
            <Link to="/weather">Weather</Link>
        </ div>
    )
}

export default NavBar;