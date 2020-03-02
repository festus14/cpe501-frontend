import React, { Component } from 'react';
import RegisterationContainer from '../RegisterationContainer/RegisterationContainer';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button'
import classes from './SignUpPage.css'

export default class SignUpPage extends Component {

    signUpHandler = (event) => {
        event.preventDefault();
    }

    render() {

        return (
            <RegisterationContainer>
                <div className={classes.Container}>
                    <div className={classes.RegisterText}>
                        <h1 style={{marginBottom: '1.5%'}}>Register</h1>
                        <p>Sign up for free and get access to</p>
                        <p>our course allocation system</p>
                    </div>
                </div>
                <div className={classes.FormContainer}>
                    <form onSubmit={this.signInHandler}>
                        <div className={classes.InputItemContainer}>
                            <p style={{marginTop: '11%'}}>Username/Full Name</p>
                            <input type="text" className={classes.NameText} placeholder="" required />
                        </div>
                        <div className={classes.InputItemContainer}>
                            <p>Department</p>
                            <input type="text" className={classes.NameText} placeholder="" required />
                        </div>
                        <div className={classes.InputItemContainer}>
                            <p>Email</p>
                            <input type="text" className={classes.NameText} placeholder="" required />
                        </div>
                        <div className={classes.InputItemContainer}>
                            <p>Password</p>
                            <input type="password" className={classes.NameText} placeholder="" required />
                        </div>
                        <Button height={45} width={130} fontSize={15}>Sign Up</Button>
                    </form>
                    <div className={classes.AccountQuestion}>
                        <p>Already have an account? <span><Link to='/sign-in'>Login here!</Link></span></p>
                    </div>
                </div>
            </RegisterationContainer>
        )
    }
}
