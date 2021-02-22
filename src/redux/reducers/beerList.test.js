import beerListReducer from './beerList.reducer';

describe('testing user reducer', () => {
    // SET_USER
    test('Action SET_BEER_LISTS', () => {
        const initialState = [];
        const action = {type: 'SET_BEER_LISTS', payload: [{beer:'beer'}, {beer: 'beer2'}, {beer: 'beer3'}]}
        expect(beerListReducer(initialState, action)).toEqual([{beer:'beer'}, {beer: 'beer2'}, {beer: 'beer3'}])
    })
    // UNSET_USER
    test('Action SET_MY_BEER_LISTS', () => {
        const initialState = [{beer:'beer'}, {beer: 'beer2'}, {beer: 'beer3'}];
        const action = {type: 'SET_MY_BEER_LISTS', payload: [{beer:'beer4'}, {beer: 'beer5'}, {beer: 'beer6'}]}
        expect(beerListReducer(initialState, action)).toEqual([{beer:'beer4'}, {beer: 'beer5'}, {beer: 'beer6'}])
    })
    // OTHER_THING
    test('Action OTHER_THING', () => {
        const initialState = [{beer:'beer'}, {beer: 'beer2'}, {beer: 'beer3'}];
        const action = {type: 'OTHER_THING', payload: ['beer6', 'beer5', 'beer4']}
        expect(beerListReducer(initialState, action)).toEqual([{beer:'beer'}, {beer: 'beer2'}, {beer: 'beer3'}])
    })
})