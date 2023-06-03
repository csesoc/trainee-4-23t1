import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/style.css";
import users from '../users.json';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      console.log('Logged in as:', foundUser.email);
      navigate('/home', { state: { user: foundUser } });
    } else {
      console.log('Invalid credentials');
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Helmet>
        <title>Login | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <Link to='/'  style={{ textDecoration: 'none', color: '#fff' }}>
          <h1 className="logo">Who's On Campus?</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/register" className='link-style'>Register</Link></li>
        </ul>
      </nav>
      <div className="login-container">
        <h1>Welcome Back!</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Log In</button>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <Link to="https://github.com/csesoc/trainee-4-23t1">here</Link></p>
      </footer>
    </div>
  );
};

export default LoginPage;
