import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import Modal from '../Modal/Modal';
import BeerCard from '../BeerCard/BeerCard';
import { useHistory } from 'react-router-dom';
import background from '../Beer-Icon/BeerBackground.jpg';

import './UserPage.css'


function UserPage() {
 
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [listSelected, setListSelected] = useState('allLists')


  // Sets beetLists to the beers in the beerLists reducer
  const beerLists = useSelector(store => store.beerLists)

  console.log('userPage beerLists:', beerLists);
  // const [displayToDOM, setDisplayToDOM] = useState([])

  // Sets the beerLists reducer to all the beers in all lists
  useEffect(() => {
    dispatch({ type: 'GET_BEER_LISTS' });
  }, []);


  const displaySelectedList = (event) => {
    console.log('list selected', event);
    if (event === 'allLists') {
      // Sets the beerLists reducer to all the beers in all lists
      dispatch({ type: 'GET_BEER_LISTS' });
    } else if (event === 'my beers') {
      // Sets the beerLists reducer to all the beers added by the user
      dispatch({ type: 'GET_MY_BEER_LISTS' });
    } else {
      // Sets the beerLists reducer to all the beers in a specific lists
      dispatch({ type: 'WHAT_TO_DISPLAY', payload: { listName: event } })
      
    }
    setListSelected(event)
  }

  const userCardClicked = (beer) => {
    console.log('card click on userPage', beer);

    history.push(`/${beer.id}`)
    dispatch({ type: 'USER_BEER_DETAILS', payload: { beer: beer.id } })
    
  }

  const addToList = (event, beer) => {
    if ( event === 'remove from list') {
      dispatch({ type: 'REMOVE_FROM_LIST', payload: { beer } })
    } else {
    console.log('List selected:', event, 'For', beer.beer_name);
    // axios put to move the beer to a different list
    axios.put(`api/beer/${beer.id}`, {
      beerName: beer.beer_name,
      // event from displaySelectedList in the select menu 
      event: event
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    })}
  }

  const backgroundStyle = {
    maxWidth: "2000px",
    minHeight: "100vh",
    backgroundImage: `url(${background})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}



  return (
    <div style={backgroundStyle} >
      <div className="container welcome" >
        <h2>GREETINGS {user.username.toString().toUpperCase()}!</h2>
        <p>Welcome to your personal list of BOI - (beers of interest)</p>
        {/* <LogOutButton className="btn" /> */}
      </div>

      <div>
        <div className="viewSelector">
          <select
            name="lists"
            className="viewListSelector"
            value={listSelected}
            onChange={(event) => { displaySelectedList(event.target.value) }}
          >
            <option value="allLists">View All</option>
            <option value="want to try">Want To Try</option>
            <option value="favorites">Favorites</option>
            <option value="did not like">Did Not Like</option>
            <option value="would drink again">Would Drink Again</option>
            <option value="my beers">My Beers</option>
          </select>
        </div>

        <br />
        <br />

        <div>
          {/* Map to display the selected view */}
          <Grid container spacing={4} justify="center" className="beerCard">
            {beerLists.map((beer) => (
              <Grid item key={beer.id} className="beerCardItem" >
                <BeerCard
                  key={beer.id}
                  beer={beer}
                  cardClicked={userCardClicked}
                  addToList={addToList}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
