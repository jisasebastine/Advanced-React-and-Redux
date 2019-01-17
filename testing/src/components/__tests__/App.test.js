import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import { shallow } from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a comment box', () => {

    expect(wrapped.find(CommentBox)).toHaveLength(1);   
});

it('has a comment list', () => {

    expect(wrapped.find(CommentList)).toHaveLength(1);
});