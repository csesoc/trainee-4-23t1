import React from 'react';
import MapView from '../components/MapView';
import PopupForm from '../components/PopupForm';

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Who's On Campus?</h1>
        <ul className="nav-links">
          <li><a href="\">Profile</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>
      <div className="home-container">
        <div className="map-container">
          <MapView />
        </div>
        <div className="location-form">
          <PopupForm />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
