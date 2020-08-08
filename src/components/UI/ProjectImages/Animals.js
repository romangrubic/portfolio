import React from 'react';
import Animals from '../../../assets/images/projects/responsive.png';
import classes from './ProjectImages.module.css';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
// import classes from './Logo.module.css';

const AnimalsImg = props => {
    return (
            <img  className={classes.Logo} src={ Animals } alt="Icon" />
    )
};

export default AnimalsImg;