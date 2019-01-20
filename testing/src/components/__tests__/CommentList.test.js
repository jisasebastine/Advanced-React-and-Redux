import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {    
    const initialState = { comments: ['Comment1', 'Comment2']};
    wrapped = mount(
    <Root initialState={initialState}>
        <CommentList />
    </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('renders one LI per comment', () => {
    console.log(wrapped.find('li').length);

    expect(wrapped.find('li')).toHaveLength(2);
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment1'); // specifically looking for Comment1    
    expect(wrapped.render().text()).toContain('Comment2'); // specifically lookin for Comment1
});