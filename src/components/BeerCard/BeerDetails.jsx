import React from 'react';
import {
    useParams
  } from "react-router-dom";


const BeerDetails = (props) => {

    let id = useParams()
    
    console.log(id);
    let beerId = id.id

    return(
        <>
        
        <h1>{`BeerDetails for ${beerId}`}</h1>
        
        </>
    )
}


export default BeerDetails