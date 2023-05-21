import React from 'react';

const HomePage = () => {
    return (
        <nav className="navbar">
        <h1 className="logo">Who's On Campus?</h1>
        <ul className="nav-links">
          <li><a href="\">Friend List</a></li>
          <li><a href="\">Map</a></li>
          <li><a href="\">Stats</a></li>
          <li><a href="\">Profile</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>
    );
};

export default HomePage;