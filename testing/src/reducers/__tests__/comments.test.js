import { SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';

it('handles the action of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New comment'
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New comment']);
});

it('handles the action of unknown type', () => {
    const newState1 = commentsReducer(['New comment'], {});
    const newState2 = commentsReducer([], {});

    expect(newState1).toEqual(['New comment']);
    expect(newState2).toEqual([]);
});