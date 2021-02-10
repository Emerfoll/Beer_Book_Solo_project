import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* addToMyBeer(action) {
    console.log('adding beer to my beer list');
    // Logs to make sure action.payload is what it should be
    console.log('logging action:', action.payload);
    
    try {
        
        const beerToAdd = {
            beer_name: action.payload.beerName,
            style: action.payload.beerStyle,
            abv: action.payload.beerABV,
            brewery: action.payload.brewery
        }

        const response = yield axios.post('/api/beer', beerToAdd);
        console.log('Posting to My Beer List', beerToAdd);
        console.log('response from adding', response);

        // yield put({ type: 'SET_BEER_LIST', payload: beers.data });


    } catch (err){
        console.log('posting error', err);
    }
  
  }

function* beerPost() {
    yield takeLatest('ADD_TO_MY_BEER', addToMyBeer);
    
  }

export default beerPost;