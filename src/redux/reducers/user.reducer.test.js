import userReducer from './user.reducer';

describe('testing user reducer', () => {
    // SET_USER
    test('Action SET_USER', () => {
        const initialState = {username: 'username'};
        const action = {type: 'SET_USER', payload: {username: 'otherUser'}}
        expect(userReducer(initialState, action)).toEqual({username: 'otherUser'})
    })
    // UNSET_USER
    test('Action UNSET_USER', () => {
        const initialState = {username: 'username'};
        const action = {type: 'UNSET_USER'}
        expect(userReducer(initialState, action)).toEqual({})
    })
    // OTHER_THING
    test('Action OTHER_THING', () => {
        const initialState = {username: 'username'};
        const action = {type: 'THING'}
        expect(userReducer(initialState, action)).toEqual({username: 'username'})
    })
})