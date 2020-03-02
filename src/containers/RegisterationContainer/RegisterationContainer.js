import React, { Component } from 'react';
import classes from './RegisterationContainer.css';

export default class RegisterationContainer extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <main>{this.props.children}</main>
            </div>
        )
    }
}
