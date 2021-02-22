import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Modal from '../Modal/Modal';
import BeerCard from '../BeerCard/BeerCard';
import background from '../Beer-Icon/singleBeerBackground.jpeg';

import './AddBeer.css'

function AddBeer() {

    const [beerName, setBeerName] = useState('');
    const [beerStyle, setBeerStyle] = useState('');
    const [beerABV, setBeerABV] = useState('');
    const [brewery, setBrewery] = useState('');
    const [image, setImage] = useState('');


    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');


    const myBeers = useSelector(store => store.beerLists)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_MY_BEER_LISTS' });
    }, []);

    // console.log('My beers:', myBeers);

    const handleSubmit = (event) => {
        event.preventDefault()

        if (beerName !== ''
            && beerStyle !== ''
            && beerABV !== ''
            && brewery !== '') {
            const beerToAdd = {
                beerName,
                beerStyle,
                beerABV,
                brewery,
                image
            }
            console.log('submitted', beerToAdd);
            // goes to addToMyBeer.saga.js
            dispatch({ type: 'ADD_TO_MY_BEER', payload: beerToAdd })

        }
        else (alert('Please fill out all fields'));

        setBeerName('');
        setBeerStyle('');
        setBeerABV('');
        setBrewery('');
        setImage('');

        dispatch({ type: 'GET_MY_BEER_LISTS' });
    }

    const cardClicked = (beer) => {
        console.log('card clicked on newBeer page', beer);
        setIsOpen(true)

        setModalContent(beer)

        // history.push(`/beerDetails/${beer.id}`)
        dispatch({ type: 'BEER_LIST_DETAILS', payload: { beer: beer.id } })
    }

    const addToList = (event, beer) => {
        console.log('List selected:', event, 'For', beer.beer_name);
        // axios.put(`api/beer/${beer.id}`, {
        //                                 beerName: beer.beer_name,
        //                                 event: event
        //                             })
    }

    const backgroundStyle = {
        maxWidth: "1800px",
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    }

    return (
        <div style={backgroundStyle}>
            <div className="container welcome" >

                <h1 >Add Your Beer</h1>
                <form onSubmit={handleSubmit} >
                    <div>
                        <div>
                            <input
                                className="addForm"
                                type="text"
                                placeholder="Beer Name"
                                value={beerName}
                                onChange={(event) => setBeerName(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="addForm"
                                type="text"
                                placeholder="Style"
                                value={beerStyle}
                                onChange={(event) => setBeerStyle(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="addForm"
                                type="number"
                                placeholder="ABV"
                                value={beerABV}
                                onChange={(event) => setBeerABV(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="addForm"
                                type="text"
                                placeholder="Brewery"
                                value={brewery}
                                onChange={(event) => setBrewery(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="addForm"
                                type="text"
                                placeholder="image"
                                value={image}
                                onChange={(event) => setImage(event.target.value)}
                            />

                        </div>
                    </div>
                    <br />
                    <button className="submitBtn" onClick={handleSubmit}>Submit</button>

                </form>
                <br />
            </div>


            <Modal
                className="modalPopup"
                open={isOpen}
                onClose={() => setIsOpen(false)}
                modalContent={modalContent}
            >
                <img src={modalContent.image} className="modalImg" />
                <div><p>Name: {modalContent.beer_name}</p></div>
                <div><p>ABV: {modalContent.abv}</p></div>
                <div><p>Style: {modalContent.style}</p></div>
                <div><p>Brewery: {modalContent.brewery}</p></div>

            </Modal>

            <div>
                <Grid container spacing={4} justify="center" className="beerCard">
                    {myBeers.map((beer) => (
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

            </div>
        </div>
    )
}

export default AddBeer;