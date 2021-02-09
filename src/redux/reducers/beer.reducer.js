


const beers = (state = [], action) => {
    switch(action.type) {
        case 'SET_BEER_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default beers;