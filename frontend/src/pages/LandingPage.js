import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logoImage from '../assets/img/logo.png';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <h1 className="logo">CSESoc Projects</h1>
        <ul className="nav-links">
          <li><Link to="/login">Log In</Link></li>
        </ul>
      </nav>
    
      <div className='landing-container'>
        <div className="content-wrapper">
          <div className="side-by-side-container">
            <img src={logoImage} alt="Application logo" />
            <div className="text-container">
              <span className='slogan-container'>
                <h4>Trainee 4 presents</h4>
                <h1>Who's on campus?</h1>
                <h4>Connecting lonely UNSW students with new friends since 2023.</h4>
              </span>
              <div className="button-container">
                <Link to="/login" className="button">Explore</Link>
                <Link to="/" className="button">Rizz Tips</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='functionability-container'>
        
      </div>

      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
