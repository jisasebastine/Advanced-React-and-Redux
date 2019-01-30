import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import 'components/Header.css'
 
class Header extends Component {
    renderHeaders = () => {
        if(this.props.authenticated) {
            return (
                <div>
                    <Link to='/signout'>Sign Out</Link>
                    <Link to='/feature'>Feature</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to='/signin'>Sign In</Link>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            );            
        }

    }

    render() {
        return(
            <div className='header'>
                <Link to='/'> Redux Auth </Link>
                {this.renderHeaders()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);