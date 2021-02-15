
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* getMyBeerLists(params) {
    console.log('getting lists');
    // get all beer lists from the DB
    try {
        const lists = yield axios.get('/api/beer/myList');
        console.log('get my beer list:', lists.data);
        yield put({ type: 'SET_MY_BEER_LISTS', payload: lists.data });
    } catch (err){
        console.log('get lists error', err);
    }
  
  }

function* myBeerList() {
    yield takeLatest('GET_MY_BEER_LISTS', getMyBeerLists);
    
  }

export default myBeerList;