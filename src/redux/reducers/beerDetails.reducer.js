

const beerListDetails = (state = [], action) => {
    switch(action.type) {
        case 'SET_BEER_DETAILS':
            return action.payload;
        
        default:
            return state;
    }
}

export default beerListDetails;