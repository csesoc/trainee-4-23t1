import React from 'react';
import MapView from '../components/MapView';
import PopupForm from '../components/PopupForm';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Map | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <Link to='/landing'  style={{ textDecoration: 'none', color: '#fff' }}>
          <h1 className="logo">Who's On Campus?</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">Logout</Link></li>
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
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <Link to="https://github.com/csesoc/trainee-4-23t1">here</Link></p>
      </footer>
    </div>
  );
};

export default HomePage;
