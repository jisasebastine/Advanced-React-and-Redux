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
            <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Comment </h1>
                <textarea onChange={this.handleChange} value={this.state.comment} autoFocus/>
                <div>
                    <button> Submit Comment</button>
                </div>
            </form>
            <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
            {/* 
                Calling a method with paranthesis means to execute the function and return its value.
                Calling a method without parenthesis means to fetch the function to be passed along as a callback.
            */}
            
            </div>
        );
    }
}

export default connect(null, actions)(CommentBox);