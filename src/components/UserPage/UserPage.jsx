import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const [listToDisplay, setListToDisplay] = useState('allLists')

  const displaySelectedList = (event) => {
    console.log('list selected');
    setListToDisplay(event)
    
    
  }

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
        onChange={(event)=> {displaySelectedList(event.target.value)}}
        >
          <option value="allLists">View All</option>
          <option value="favorites">Favorites</option>
          <option value="want_to_try">Want To Try</option>
          <option value="did_not_like">Did Not Like</option>
          <option value="would_drink_again">Would Drink Again</option>
          <option value="myBeers">My Beers</option>
        </select>
        {(listToDisplay === 'allLists' ? <p>displaying all</p> : <p>displaying None</p>) }
        


      </div>
      
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
