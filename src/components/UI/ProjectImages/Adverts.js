import React from 'react';
import Snoop from '../../../assets/images/projects/responsive-snoop.png';
import classes from './ProjectImages.module.css';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
// import classes from './Logo.module.css';

const SnoopImg = props => {
    return (
            <img  className={classes.Logo} src={ Snoop } alt="Icon" />
    )
};

export default SnoopImg;