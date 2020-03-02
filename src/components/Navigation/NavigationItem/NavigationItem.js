import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={classes.Link}>
        <NavLink
            exact 
            to={props.link}
            activeStyle={{color: '#B11226'}}
            >{props.children}</NavLink>
    </li>
);

export default navigationItem;