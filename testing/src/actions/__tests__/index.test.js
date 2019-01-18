import { SAVE_COMMENT } from 'actions/types';
import { saveComment } from 'actions';

describe('saveComment action', () =>{
    it('returns the correct action type', () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('returns the correct action payload', () => {
        const action = saveComment('New Comment');

        expect(action.payload).toEqual('New Comment');
    });
});