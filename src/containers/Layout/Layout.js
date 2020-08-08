import React, { useState } from 'react';
import DesktopNav from '../../components/Navigation/DesktopNav/DesktopNav';
import MobileNav from '../../components/Navigation/MobileNav/MobileNav';
import classes from './Layout.module.css';
import SideBar from '../../components/Navigation/MobileNav/SideBar/SideBar';

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false)
    }
    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }
    return (
        <>
            <DesktopNav className={ classes.DesktopOnly } />
            <MobileNav className={ classes.MobileOnly } hamburgerClicked={ sideDrawerToggleHandler } />
            <SideBar
                closed={ sideDrawerClosedHandler }
                open={ sideDrawerIsVisible } />
            <main className={ classes.Content }>
                { props.children }
            </main>
        </>
    )
};

export default Layout;