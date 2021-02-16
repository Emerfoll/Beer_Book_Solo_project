import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* getUserBeerDetails(action) {
    console.log('User Beer details:', action.payload);
    // get all beers from the DB
    try {
        const userBeer = yield axios.get(`/api/beer/userBeer/${action.payload.beer}`);
        // console.log('get all:', beers.data);
        yield put({ type: 'SET_USER_BEER', payload: userBeer.data });
    } catch (err){
        console.log('get user beer error', err);
    }
  
  }

function* userBeerDetails() {
    yield takeLatest('USER_BEER_DETAILS', getUserBeerDetails);
    
  }

export default userBeerDetails;