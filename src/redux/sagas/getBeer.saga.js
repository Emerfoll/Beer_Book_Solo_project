import axios from 'axios';



function* getBeerList(params) {
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

export default getBeerList;