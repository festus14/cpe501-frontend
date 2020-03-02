import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.Links}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/about-us">About Us</NavigationItem>
        <NavigationItem link="/sign-in">Sign In</NavigationItem>
        <NavigationItem link="/sign-up">Sign Up</NavigationItem>
    </ul>
)

export default navigationItems; 


