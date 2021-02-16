

const userBeer = (state = [], action) => {
    switch(action.type) {
        case 'SET_USER_BEER':
            return action.payload;
        
        default:
            return state;
    }
}

export default userBeer;