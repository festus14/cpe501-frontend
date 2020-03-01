import React from 'react';
import classes from './Button.css'

const button = (props) => (
    <button className={classes.Button} style={{height: `${props.height}px`, width: `${props.width}px`, fontSize: `${props.fontSize}px`}} >{props.children}</button>
);

export default button;