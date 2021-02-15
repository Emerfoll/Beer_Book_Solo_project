import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import Modal from '../Modal/Modal';
import BeerCard from '../BeerCard/BeerCard';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();


  const [listToDisplay, setListToDisplay] = useState('allLists');
  const beerLists = useSelector(store => store.beerLists)

  console.log('userPage beerLists:', beerLists);
  // const [displayToDOM, setDisplayToDOM] = useState([])

  useEffect(() => {
    dispatch({ type: 'GET_BEER_LISTS' });
  }, []);


  const displaySelectedList = (event) => {
    console.log('list selected', event);
    if (event === 'allLists') {
      dispatch({ type: 'GET_BEER_LISTS' });
    } else {
      dispatch({ type: 'WHAT_TO_DISPLAY', payload: { listName: event } })
      setListToDisplay(event);
    }
  }

  // const whatToDisplay = () => {
  //   
  //   console.log('what to display list:', list);

  // }

  const cardClicked = (thing) => {
    console.log('card click on userPage', thing);
  }

  const addToList = (event, beer) => {
    console.log('List selected:', event, 'For', beer.beer_name);
    // axios.put(`api/beer/${beerId}`, {
    //                                 beerName: beer.beer_name,
    //                                 event: event
    //                             })
  }


  console.log(beerLists);


  return (
    <>

      <div className="container">
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div>
      <div>
        <div>
          <select
            name="lists"
            className="listSelector"
            onChange={(event) => { displaySelectedList(event.target.value) }}
          >
            <option value="allLists">View All</option>
            <option value="favorites">Favorites</option>
            <option value="want to try">Want To Try</option>
            <option value="did not like">Did Not Like</option>
            <option value="would drink again">Would Drink Again</option>
            <option value="my beers">My Beers</option>
          </select>
        </div>

        <br />
        <br />

        <div>
          <Grid container spacing={4} justify="center" className="beerCard">
            {beerLists.map((beer) => (
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

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
