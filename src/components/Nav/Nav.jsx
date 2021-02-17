import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/user">
        <h2 className="nav-title">BEER BOOK</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {/* {loginLinkData.text} */} My Lists
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/addBeer">
              Add a Beer
            </Link>
            <Link className="navLink" to="/newBeer">
              Find a New Beer
            </Link>
            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
