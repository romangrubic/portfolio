import React from 'react';
import Burger from '../../../assets/images/projects/responsive-burger.png';
import classes from './ProjectImages.module.css';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
// import classes from './Logo.module.css';

const BurgerImg = props => {
    return (
            <img  className={classes.Logo} src={ Burger } alt="Icon" />
    )
};

export default BurgerImg;