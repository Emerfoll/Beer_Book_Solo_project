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

function* beerList() {
    yield takeLatest('GET_BEER_LISTS', getBeerLists);
    
  }

export default beerList;