import React from 'react';
import icon from '../../../assets/images/logo/profilepic.png';
// import NavItem from '../../Navigation/NavigationItems/NavItem/NavItem';
import classes from './Logo.module.css';

const Logo = props => {
    return (
        <div className={ classes.Logo }>
            <img src={ icon } alt="Icon" />
        </div>
    )
};

export default Logo;