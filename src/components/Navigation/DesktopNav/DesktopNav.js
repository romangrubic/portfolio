import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';
import SocialLinks from '../../UI/SocialLinks/SocialLinks';

import classes from './DesktopNav.module.css';

const DesktopNav = (props) => {
    return (
        <header className={ classes.Toolbar } >
            <div className={ classes.Logo }>
                <a href="/">
                <Logo />
                </a>
            </div>
            <div className={classes.Name}>
                <h1>Roman Grubic</h1>
                <h4>Full-stack developer</h4>
            </div>
            <br></br>
            <nav>
                <NavigationItems />
            </nav>
            <SocialLinks />
        </header>
    )
};

export default DesktopNav;