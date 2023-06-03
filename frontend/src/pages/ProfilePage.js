import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Profile | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <Link to='/'  style={{ textDecoration: 'none', color: '#fff' }}>
          <h1 className="logo">Who's On Campus?</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
      <div className="profile-container">
        {/* fill here */}
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <Link to="https://github.com/csesoc/trainee-4-23t1">here</Link></p>
      </footer>
    </div>
  );
};

export default HomePage;
