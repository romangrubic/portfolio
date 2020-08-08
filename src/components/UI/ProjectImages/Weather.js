import React from 'react';
import Weather from '../../../assets/images/projects/responsive-weather.png';
import classes from './ProjectImages.module.css';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
// import classes from './Logo.module.css';

const WeatherImg = props => {
    return (
            <img  className={classes.Logo} src={ Weather } alt="Icon" />
    )
};

export default WeatherImg;