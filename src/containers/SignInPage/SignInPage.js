import React, { Component } from 'react';
import RegisterationContainer from '../RegisterationContainer/RegisterationContainer';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button'
import classes from './SignInPage.css'

export default class SignInPage extends Component {

    signInHandler = (event) => {
        event.preventDefault();
    }

    render() {

        return (
            <RegisterationContainer>
                <div className={classes.Container}>
                    <div className={classes.RegisterText}>
                        <h1 style={{marginBottom: '1.5%'}}>Sign In</h1>
                        <p>Sign in with your registered</p>
                        <p>username and password</p>
                    </div>
                </div>
                <div className={classes.FormContainer}>
                    <form onSubmit={this.signInHandler}>
                        <div className={classes.InputItemContainer}>
                            <p style={{marginTop: '11%'}}>Username</p>
                            <input type="text" className={classes.NameText} placeholder="" required />
                        </div>
                        <div className={classes.InputItemContainer}>
                            <p>Password</p>
                            <input type="password" className={classes.NameText} placeholder="" required />
                        </div>
                        <Button height={45} width={130} fontSize={15}>Sign In</Button>
                    </form>
                    <div className={classes.ForgotPassword}>
                        <p><Link>Forgot Password?</Link></p>
                    </div>
                    <div className={classes.AccountQuestion}>
                        <p>Don't have an account? <span><Link to='sign-up'>Join here!</Link></span></p>
                    </div>
                </div>
            </RegisterationContainer>
        )
    }
}
