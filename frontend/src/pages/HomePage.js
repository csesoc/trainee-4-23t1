import React from 'react';
import MapView from '../components/MapView';
import PopupForm from '../components/PopupForm';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const HomePage = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Access the user object from location state
  const navigate = useNavigate();
  const abc = () => {
    navigate('/profile', { state: { user } });
  }
  //          <Link to={{ pathname: '/profile', state: { user } }}>Profile</Link>

  return (
    <div>
      <Helmet>
        <title>Map | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <Link to='/'  style={{ textDecoration: 'none', color: '#fff' }}>
          <h1 className="logo">Who's On Campus?</h1>
        </Link>
        <ul className="nav-links">
          <li>
          <a className='hoverable-link' onClick={abc}>Profile</a>
          </li> {/* Pass user object as state */}
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
