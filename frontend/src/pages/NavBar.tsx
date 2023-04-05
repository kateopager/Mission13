import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark fw-bold">
      <Link to="./Home" className="navbar-brand">
        Home
      </Link>{' '}
      <br />
      <Link to="./Podcasts" className="navbar-brand">
        Podcasts
      </Link>{' '}
      <br />
      <Link to="./Movies" className="navbar-brand">
        Movie Database
      </Link>{' '}
      <br />
    </nav>
  );
}

export default Navbar;
