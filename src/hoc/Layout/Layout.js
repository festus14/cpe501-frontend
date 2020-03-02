import React, { Component, Fragment } from 'react';

class Layout extends Component{
    render(){
        return (
            <Fragment>
                <main>
                    {this.props.children}
                </main>
            </Fragment>

        )
    }
}

export default Layout;