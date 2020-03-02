import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import signInPage from '../SignInPage/SignInPage';
import signUpPage from '../SignUpPage/SignUpPage';
import LandingContent from '../../components/LandingContent/LandingContent';


// import classes from './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Route path='/' component={LandingContent}/>
                <Switch>
                    <Route path='/sign-in' component={signInPage} />
                    <Route path='/sign-up' component={signUpPage} />
                </Switch>
            </div>
        )
    }
}
