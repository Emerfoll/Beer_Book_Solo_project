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

  const [displayToDOM, setDisplayToDOM] = useState([])

  useEffect(() => {
    dispatch({ type: 'GET_BEER_LISTS' });
  }, []);


  const displaySelectedList = (event) => {
    console.log('list selected');
    setListToDisplay(event);
    whatToDisplay();

  }

  const whatToDisplay = () => {
    let list = beerLists;

    switch (listToDisplay) {
      case 'favorites':
        console.log('Displaying 3');
        break;

      case 'want_to_try':
        setDisplayToDOM([])
        list.map((beer) => {
          if (beer.want_to_try == true) {
            displayToDOM.push(beer)
          }
        })

        console.log(displayToDOM);
        break;

      case 'did_not_like':
        console.log('Displaying 2');
        break;

      case 'would_drink_again':
        setDisplayToDOM([])
        list.map((beer) => {
          if (beer.would_drink_again == true) {
            displayToDOM.push(beer)
          }
        })

        console.log(displayToDOM);
        break;


      default: console.log('Displaying all');
        break;


    }
  }

  const cardClicked = () => {
    console.log('cardclick');
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
        <select
          name="lists"
          className="listSelector"
          onChange={(event) => { displaySelectedList(event.target.value) }}
        >
          <option value="allLists">View All</option>
          <option value="favorites">Favorites</option>
          <option value="want_to_try">Want To Try</option>
          <option value="did_not_like">Did Not Like</option>
          <option value="would_drink_again">Would Drink Again</option>
          <option value="myBeers">My Beers</option>
        </select>

        <p>{JSON.stringify(displayToDOM)}</p>

        {(listToDisplay === 'allLists' ?
          <Grid container spacing={4} justify="center" className="beerCard">
            {beerLists.map((beer) => (
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
          :
          <Grid container spacing={4} justify="center" className="beerCard">
            {displayToDOM.map((beer) => (
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
          </Grid>)}



      </div>

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
