import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


const BeerDetails = (props) => {

    let userBeer = useSelector(store => store.userBeer)
    console.log(userBeer);
    let id = useParams()
    
    console.log(id);
    let beerId = id.id

    return(
        <>
        
        <h1>{`BeerDetails for ${userBeer[0]?.beer_name}`}</h1>
        
        </>
    )
}


export default BeerDetails