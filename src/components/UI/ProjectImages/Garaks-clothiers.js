import React from 'react';
import Clothiers from '../../../assets/images/projects/garaks-clothiers.png';
import classes from './ProjectImages.module.css';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
// import classes from './Logo.module.css';

const ClothiersImg = (props) => {
    return <img className={classes.Logo} src={Clothiers} alt='Icon' />;
};

export default ClothiersImg;
