


const beers = (state = [], action) => {
    switch(action.type) {
        case 'SET_BEERS':
            return action.payload;
        default:
            return state;
    }
}

export default beers;