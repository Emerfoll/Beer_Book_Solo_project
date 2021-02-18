import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


// Grabs the beer details for the UserBeerDetails page
function* getUserBeerDetails(action) {
    console.log('User Beer details:', action.payload);
    // get all beers from the DB
    try {
        const userBeer = yield axios.get(`/api/beer/userBeer/${action.payload.beer}`);
        // console.log('get all:', beers.data);
        yield put({ type: 'SET_USER_BEER', payload: userBeer.data });
    } catch (err) {
        console.log('get user beer error', err);
    }
}

// Grabs the beer details for the BeerListDetails page
function* getBeerDetails(action) {
    console.log('getting Beer details:', action.payload);
    // get all beers from the DB
    try {
        const beerDetails = yield axios.get(`/api/beer/beerDetails/${action.payload.beer}`);
        // console.log('get all:', beers.data);
        yield put({ type: 'SET_BEER_DETAILS', payload: beerDetails.data });
    } catch (err) {
        console.log('get beer details error', err);
    }
}

function* beerDetails() {
    yield takeLatest('USER_BEER_DETAILS', getUserBeerDetails);
    yield takeLatest('BEER_LIST_DETAILS', getBeerDetails)
}

export default beerDetails;