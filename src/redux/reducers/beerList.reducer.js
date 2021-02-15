


const beerLists = (state = [], action) => {
    switch(action.type) {
        case 'SET_BEER_LISTS':
            return action.payload;
        case 'SET_MY_BEER_LISTS':
            return action.payload;
        default:
            return state;
    }
}

export default beerLists;