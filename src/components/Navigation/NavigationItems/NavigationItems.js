import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.Links}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/about-us" exact>About Us</NavigationItem>
        <NavigationItem link="/sign-in" exact>Sign In</NavigationItem>
        <NavigationItem link="/log-out" exact>Log Out</NavigationItem>
    </ul>
)

export default navigationItems;