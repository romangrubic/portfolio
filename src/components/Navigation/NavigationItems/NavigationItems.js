import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavigationItems.module.css';

const NavigationItems = (props) => {
    return (
        <ul className={classes.Ul}>
            <NavItem link='/about'>About</NavItem>
            <NavItem link='/portfolio'>Portfolio</NavItem>
            <NavItem link='/contact'>Contact</NavItem>
        </ul>
    );
};

export default NavigationItems;
