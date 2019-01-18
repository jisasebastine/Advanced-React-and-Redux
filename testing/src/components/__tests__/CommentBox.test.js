import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped; 

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it(' has a text area', () => {

    expect(wrapped.find('textarea')).toHaveLength(1);
});

describe('text area', () => {
    const event = {
        target: { value: 'new comment'}
    };
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', event);
        wrapped.update();
    });

    it('changes the value of textarea when comment is input', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(event.target.value);
    });

    it('empties the text area when comment is submitted', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});