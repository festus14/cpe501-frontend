import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/sign-in" exact>Sign In</NavigationItem>
        <NavigationItem link="/about-us" exact>About Us</NavigationItem>
        <NavigationItem link="/log-out" exact>Log Out</NavigationItem>
    </ul>
)

export default navigationItems;