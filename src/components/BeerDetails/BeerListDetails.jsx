import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import './UserBeerDetails.css';


// Navigated to from the My Lists page
const BeerListDetails = (props) => {

    const dispatch = useDispatch();

    let beerDetails = useSelector(store => store.beerListDetails)
    // console.log(beerDetails);
    

    let id = useParams()
    let beerId = id.id

    useEffect(() => {
        dispatch({ type: 'BEER_LIST_DETAILS', payload: { beer: beerId } })

    }, []);

    // const updateNotes = (event) => {
    //     console.log('thing');
    //     setUserNotes(event)

    //     axios.put(`api/beer/userBeer/${beerId}`, { userNotes }
    //     ).then(response => {
    //         console.log(response);
    //     }).catch(err => {
    //         console.log(err);
    //     })

    //     dispatch({ type: 'USER_BEER_DETAILS', payload: { beer: beerId } })
    //     setUserNotes('')
    // }



    return (
        <div className="details">
            <div className="detailsContent">
                <h1>Details for: {beerDetails[0]?.beer_name}</h1>
                <p>Brewery: {beerDetails[0]?.brewery}</p>
                <p>Style: {beerDetails[0]?.style}</p>
                <p>Alcohol content: {beerDetails[0]?.abv}</p>
                {/* <p>Notes: {userBeer[0]?.notes}</p>
                <form onSubmit={(event) => updateNotes(event.target.value)}>
                    <textarea
                        value={userNotes}
                        onChange={(event) => setUserNotes(event.target.value)}
                        cols="30" rows="10"
                    ></textarea>

                    <div>
                        <button>Update notes</button>
                    </div>
                </form> */}
            </div>
        </div>
    )
}


export default BeerListDetails