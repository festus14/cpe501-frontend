import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={classes.Link}>
        <NavLink 
            to={props.link}
            >{props.children}</NavLink>
    </li>
);

export default navigationItem;