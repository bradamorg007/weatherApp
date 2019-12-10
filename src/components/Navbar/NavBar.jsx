import React from 'react';
import css from './NavBar.module.css';
import './NavBar.css'
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav className={css.NavBar}>
            < NavLink exact activeClassName="NavActive" to="/">News</ NavLink>
            <span className={css.Spacer}>.</span>
            <NavLink exact activeClassName="NavActive" to="/weather" ><span>Weather</span></NavLink>
        </ nav>
    )
}

export default NavBar;