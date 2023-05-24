import React from 'react';
import { Helmet } from 'react-helmet';
import logoImage from '../assets/img/logo.png';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <h1 className="logo">Who's On Campus?</h1>
        <ul className="nav-links">
          <li><a href="\login">Log In</a></li>
        </ul>
      </nav>
      <div className='landing-container'>
        <img className="image-container"src={logoImage} alt="Application logo" />
        <div className='options-container'>
            {/* continue here */}
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
