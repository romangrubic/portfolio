import React from 'react';
import KingdomProperties from '../../../assets/images/projects/responsive-kingdom.png';
import classes from './ProjectImages.module.css';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
// import classes from './Logo.module.css';

const KingdomImg = props => {
    return (
            <img  className={classes.Logo} src={ KingdomProperties } alt="Icon" />
    )
};

export default KingdomImg;