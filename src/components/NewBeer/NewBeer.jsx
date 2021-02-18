import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
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

    const cardClicked = (event) => {
        console.log('card clicked on newBeer page', event);
        setIsOpen(true)
    }

    const addToList = (event, beer) => {
        console.log('List selected:', event, 'For', beer);

        let list = 0
        switch (event) {
            case 'want to try':
                list = 1;
                break;
            case 'favorites':
                list = 2;
                break;
            case 'did not like':
                list = 3;
                break;
            case 'would drink again':
                list = 4;
                break;
        }

        axios.post(`api/beer/addToList/${beer.id}`, {
            beer: beer,
            event: list
        }).then(response => {
            console.log('add response:', response.data);
        }).catch(err => {
            console.log('add to list newBeer:', err);
        })
    }




    return (
        <>

            {/* <h1>NewBeer</h1> */}
            <SearchBar
                beers={beers}
            />

            <br />
            <Grid container spacing={4} justify="center" className="beerCard">
                {beers.map((beer) => (
                    <Grid item key={beer.id} className="beerCardItem" >
                        <BeerCard
                            key={beer.id}
                            beer={beer}
                            cardClicked={cardClicked}
                            addToList={addToList}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}


export default NewBeer;






{/* <Modal 
            open={isOpen} 
            onClose={() => setIsOpen(false)}
            >
                 Fancy Modal
            </Modal> */}