import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount = () => {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        componentDidUpdate = () => {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }
    function mapStateToProps(state) {
        return {auth: state.auth.authenticated};
    }
    return connect(mapStateToProps)(ComposedComponent);
}