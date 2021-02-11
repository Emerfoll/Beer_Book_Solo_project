import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import './NewBeer.css'
import Modal from '../Modal/Modal';
import BeerCard from '../BeerCard/BeerCard';
import SearchBar from '../SearchBar/SearchBar';



function NewBeer(params) {

    const dispatch = useDispatch();
    const beers = useSelector(store => store.beers);

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        dispatch({ type: 'GET_BEER' });
    }, []);

    const cardClicked = () => {
        console.log('cardClicked');
        setIsOpen(true)
    }



    return (
        <>

            <h1>NewBeer</h1>
            <SearchBar 
            beers={beers}
            />

            <Modal 
            open={isOpen} onClose={() => setIsOpen(false)}
            >
                Super Fancy Modal
            </Modal>

            <br />
            <Grid container spacing={4} justify="center" className="beerCard">
                {beers.map((beer) => (
                    <Grid item key={beer.id} className="beerCardItem" >
                    <BeerCard
                        key={beer.id}
                        beerId={beer.id}
                        beerName={beer.beer_name}
                        beerStyle={beer.style}
                        cardClicked={cardClicked}
                    />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}


export default NewBeer;