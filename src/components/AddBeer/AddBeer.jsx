import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Modal from '../Modal/Modal';
import BeerCard from '../BeerCard/BeerCard';
import background from '../Beer-Icon/BeerWall.jpg'


function AddBeer() {

    const [beerName, setBeerName] = useState('');
    const [beerStyle, setBeerStyle] = useState('');
    const [beerABV, setBeerABV] = useState('');
    const [brewery, setBrewery] = useState('');

    const myBeers = useSelector(store => store.beerLists)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_MY_BEER_LISTS' });
    }, []);

    console.log('My beers:', myBeers);

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
                brewery
            }
            console.log('submitted', beerToAdd);
            dispatch({ type: 'ADD_TO_MY_BEER', payload: beerToAdd })
            setBeerName('');
            setBeerStyle('');
            setBeerABV('');
            setBrewery('');
        }
        else (alert('Please fill out all fields'));

        dispatch({ type: 'GET_MY_BEER_LISTS' });
    }

    const cardClicked = (event) => {
        console.log('card clicked on addBeer page', event);
        // setIsOpen(true)
    }

    const addToList = (event, beer) => {
        console.log('List selected:', event, 'For', beer.beer_name);
        // axios.put(`api/beer/${beer.id}`, {
        //                                 beerName: beer.beer_name,
        //                                 event: event
        //                             })
    }

    const backgroundStyle = {
        maxWidth: "2000px",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    }

    return (
        <div style={backgroundStyle}>
            <div className="container welcome" >

                <h1>Add Your Beer</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <input
                                type="text"
                                placeholder="Beer Name"
                                value={beerName}
                                onChange={(event) => setBeerName(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Style"
                                value={beerStyle}
                                onChange={(event) => setBeerStyle(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="ABV"
                                value={beerABV}
                                onChange={(event) => setBeerABV(event.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Brewery"
                                value={brewery}
                                onChange={(event) => setBrewery(event.target.value)}
                            />
                        </div>
                        {/* <div>
                        <select name="lists" className="viewListSelector">
                            <option value="listToAddTo">Select a List</option>
                            <option value="favorites">Favorites</option>
                            <option value="want to try">Want To Try</option>
                            <option value="did not like">Did Not Like</option>
                            <option value="would drink again">Would Drink Again</option>
                        </select>
                    </div> */}
                    </div>
                    <br />
                    <button className="submitBtn" onClick={handleSubmit}>Submit</button>

                </form>
                <br />
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