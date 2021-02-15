import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* getBeerLists(params) {
    console.log('getting lists');
    // get all beer lists from the DB
    try {
        const lists = yield axios.get('/api/beer/lists');
        console.log('get lists:', lists.data);
        yield put({ type: 'SET_BEER_LISTS', payload: lists.data });
    } catch (err){
        console.log('get lists error', err);
    }
}

function* whatToDisplay(action) {
    console.log('what list to display', action.payload);
    
    try {
        const listToDisplay = yield axios.post('api/beer/listToDisplay', action.payload)
        console.log('list to display', listToDisplay.data);
        yield put({ type: 'SET_BEER_LISTS', payload: listToDisplay.data });

    } catch (err) {
        console.log('error selecting what to display:', err);
        
    }
}


function* beerList() {
    yield takeLatest('GET_BEER_LISTS', getBeerLists);
    yield takeLatest('WHAT_TO_DISPLAY', whatToDisplay);
  }

export default beerList;