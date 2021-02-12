import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* removeFromLists(action) {
    console.log('Removing from lists');
    // Removes a beer from all lists in the DB
    try {
        const beerToRemove = action.payload

        console.log('beerToRemove:', beerToRemove);
        
        const response = yield axios.delete(`/api/beer/${beerToRemove}`);
        console.log('Removing from lists', beerToRemove);
        console.log('response from remove:', response.data);

        yield put({type: 'GET_BEER_LISTS'})
        
    } catch (err) {
        console.log('Error Removing from lists', err);
        
    }
}

function* RemoveBeer() {
    yield takeLatest('REMOVE_FROM_LIST', removeFromLists);
    
  }

export default RemoveBeer;