import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import background from '../Beer-Icon/singleBeerBackground.jpeg';

import './UserBeerDetails.css';


// Navigated to from the My Lists page
const BeerDetails = (props) => {

    const dispatch = useDispatch();

    let userBeer = useSelector(store => store.userBeer)
    // console.log(userBeer);
    const [userNotes, setUserNotes] = useState('')

    let id = useParams()
    let beerId = id.id

    useEffect(() => {
        dispatch({ type: 'USER_BEER_DETAILS', payload: { beer: beerId } })

    }, []);

    const updateNotes = (event) => {
        console.log('thing');
        setUserNotes(event)

        axios.put(`api/beer/userBeer/${beerId}`, { userNotes }
        ).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })

        dispatch({ type: 'USER_BEER_DETAILS', payload: { beer: beerId } })
        setUserNotes('')
    }

    const backgroundStyle = {
        maxWidth: "1800px",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    }


    return (
        <div className="details" style={backgroundStyle}>
            <div className="detailsContent">
                <h1>Details for: {userBeer[0]?.beer_name}</h1>
                <img src={userBeer[0]?.image} alt=""/>
                <p>Brewery: {userBeer[0]?.brewery}</p>
                <p>Style: {userBeer[0]?.style}</p>
                <p>Alcohol content: {userBeer[0]?.abv}</p>
                <p>Notes: {userBeer[0]?.notes}</p>
                <form onSubmit={(event) => updateNotes(event.target.value)}>
                    <textarea
                        value={userNotes}
                        onChange={(event) => setUserNotes(event.target.value)}
                        cols="30" rows="10"
                    ></textarea>

                    <div>
                        <button>Update notes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default BeerDetails