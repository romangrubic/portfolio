import React from 'react';
import StarTrek from '../../../assets/images/projects/responsive-star-trek.png';
import classes from './ProjectImages.module.css';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
// import classes from './Logo.module.css';

const StarTrekImg = props => {
    return (
            <img  className={classes.Logo} src={ StarTrek } alt="Icon" />
    )
};

export default StarTrekImg;
