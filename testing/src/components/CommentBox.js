import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class CommentBox extends Component {

    state={
        comment: ''
    };

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.comment != '') {
            this.props.saveComment(this.state.comment);
        }
        this.setState({comment: ''});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Comment </h1>
                <textarea onChange={this.handleChange} value={this.state.comment} autoFocus/>
                <div>
                    <button> Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);