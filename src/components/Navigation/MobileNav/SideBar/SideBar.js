import React from 'react';
import Logo from '../../../UI/Logo/Logo';
import NavigationItems from '../../NavigationItems/NavigationItems';
import classes from './SideBar.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import SocialLinks from '../../../UI/SocialLinks/SocialLinks';


const SideBar = (props) => {
    let attachClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <Backdrop
                show={ props.open }
                clicked={ props.closed } />
            <div className={ attachClasses.join(" ") }>
                <a href="/">
                <Logo />
                </a>
                <div className={ classes.Name }>
                    <h1>Roman Grubic</h1>
                    <h2>Full-stack developer</h2>
                </div>
                <nav onClick={ props.closed }>
                    <NavigationItems />
                </nav>
                <SocialLinks />
            </div>
        </>
    );
};

export default SideBar;