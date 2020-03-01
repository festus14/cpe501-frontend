import React, { Component, Fragment } from 'react';
import Layout from '../../hoc/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import {Route, Switch} from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <Layout>
                    <div>Unilag Course Allocation System</div>
                    <div>Course allocation made easy with our algorithm</div>
                    <Button>Get Started</Button>
                    <Route path='/' exact />
                    <Route path='/sign-in' component={LandingPage} />
                    <Route path='/about-us'  />
                    <Route path='/log-out' />
                </Layout>
            </Fragment>
        )
    }
}
