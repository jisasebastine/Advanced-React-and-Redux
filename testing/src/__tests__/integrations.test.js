// Integration test is used to combine testing of many components an wrap it together. 
// Here we test the many components within the App component including CommentBox and CommentList.
import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

describe('comment list', () => {
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
            status: 200,
            response: [ { name: 'Fetched comment #1' }, { name: 'Fetched comment #2' }]
        });
    });
    
    afterEach(() => {
        moxios.uninstall();
    });
    
    it('can fetch a list of comments and display them', (done) => { 
        // here we pass a callback function done() so that Jest waits for the function 
        // to call done() before it returns the decision if the test was a pass or fail
    
        const wrapped = mount(
            // We are not passing an intitial state to the Root component since we are not testing any aspects that require an inital state.
            <Root> 
                <App />
            </Root>
        );
    
        wrapped.find('.fetch-comments').simulate('click');
        // introduce a tiny little pause
    
        moxios.wait(() => {
            wrapped.update();
            expect(wrapped.find('li')).toHaveLength(2);
            done();
            wrapped.unmount();
        });
    });
});

describe('comment box', () => {
    let wrapped;
    beforeEach(() =>{
        wrapped = mount(
            <Root>
                <App />
            </Root>
        );
    });

    afterEach(() => {
        wrapped.unmount();
    });

    it('does not allow an empty comment to be submitted', () => {
        const event = { target: {value: ''}};
        wrapped.find('textarea').simulate('change', event);
        wrapped.update();
        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('li')).toHaveLength(0);
        
    });
});