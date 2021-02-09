import BeerCard from '../BeerCard/BeerCard';
import SearchBar from '../SearchBar/SearchBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './NewBeers.css'



function NewBeer(params) {

    const dispatch = useDispatch();
    const beers = useSelector(store => store.beers);

    useEffect(() => {
        dispatch({ type: 'GET_BEER' });
    }, []);

    console.log(beers);

    return (
        <>

            <h1>NewBeer</h1>
            <SearchBar 
            beers={beers}
            />
            <br />
            <Grid container spacing={4} justify="center" className="beerCard">
                {beers.map((beer) => (
                    <Grid item key={beer.id} className="beerCardItem">
                    <BeerCard
                        key={beer.id}
                        beerName={beer.beer_name}
                        beerStyle={beer.style}
                    />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}


export default NewBeer;