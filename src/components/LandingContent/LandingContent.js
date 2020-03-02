import React, { Component } from 'react'

import Toolbar from '../Toolbar/Toolbar'
import Button from '../UI/Button/Button'
import classes from './LandingContent.css'

export default class LandingContent extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div className={this.props.location.pathname === '/' ? classes.Container : classes.ShiftedContainer}>
                <Toolbar />
                <main className={this.props.location.pathname === '/' ? classes.MiddleContent: classes.ShiftedMiddleContent}>
                    <div className={classes.Title}>Unilag Course Allocation System</div>
                    <div className={classes.Body}>Course allocation made easy with our algorithm</div>
                    <Button height={60} width={150} fontSize={16}>Get Started</Button>
                </main>
                <footer className={this.props.location.pathname === '/' ? classes.Footer : classes.ShiftedFooter}>
                    <p style={{color: '#1F1E1E'}}>Copyright &copy; 2020 SEES Class '2020. All Rights Reserved</p>
                </footer>
            </div>
        )
    }
}
