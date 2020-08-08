import React from 'react';
import classes from './MobileNav.module.css';
import Hamburger from './Hamburger/Hamburger';

const MobileNav = props => {
    return (
        <header className={ classes.Toolbar } >
            <Hamburger clicked={props.hamburgerClicked}/>
        </header>
    )
};

export default MobileNav;