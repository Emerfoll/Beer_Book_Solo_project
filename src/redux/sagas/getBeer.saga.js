import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* getBeer(params) {
    console.log('Beer run');
    // get all beers from the DB
    try {
        const beers = yield axios.get('/api/beer');
        console.log('get all:', beers.data);
        yield put({ type: 'SET_BEER_LIST', payload: beers.data });
    } catch (err){
        console.log('get all error', err);
    }
  
  }

function* beerRun() {
    yield takeLatest('GET_BEER', getBeer);
    
  }

export default beerRun;