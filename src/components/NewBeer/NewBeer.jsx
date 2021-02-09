import BeerCard from '../BeerCard/BeerCard';
import SearchBar from '../SearchBar/SearchBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import {
    HashRouter as Router,
    Route,
    useParams,
    Link
} from "react-router-dom";


function NewBeer(params) {

    const dispatch = useDispatch();
    const beers = useSelector(store => store.beers);

    useEffect(() => {
        dispatch({ type: 'GET_BEER' });
    }, []);
    
    console.log(beers);

    return(
        <>
        
        <h1>NewBeer</h1>
        <SearchBar />
        <br />


        <BeerCard />

        {beers.map((beer) => (
            <li>{beer.beer_name}</li>
        ))}

        </>
    )
}


export default NewBeer;