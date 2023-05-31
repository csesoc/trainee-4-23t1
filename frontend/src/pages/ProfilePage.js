import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Profile | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <h1 className="logo">Who's On Campus?</h1>
        <ul className="nav-links">
          <li><a href="/home">Home</a></li>
          <li><a href="/login">Logout</a></li>
        </ul>
      </nav>
      <div className="profile-container">
        {/* fill here */}
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
