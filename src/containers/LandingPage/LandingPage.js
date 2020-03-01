import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Button from '../../components/UI/Button/Button';

import classes from './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <Toolbar />
                <main className={classes.MiddleContent}>
                    <div className={classes.Title}>Unilag Course Allocation System</div>
                    <div className={classes.Body}>Course allocation made easy with our algorithm</div>
                    <Button height={60} width={150} fontSize={16}>Get Started</Button>
                </main>
                <nav>
                    <p style={{color: '#1F1E1E'}}>Copyright &copy; 2020 SEES Class '2020. All Rights Reserved</p>
                </nav>
            </div>
        )
    }
}
