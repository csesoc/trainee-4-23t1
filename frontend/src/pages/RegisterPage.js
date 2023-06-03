import React, { useState } from 'react';
import "../assets/css/style.css";
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
    console.log('Address:', address);
    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setAddress('');
    // Navigate to the input page
    navigate('/input');
  };

  return (
    <div>
      <Helmet>
        <title>Register | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <h1 className="logo">Who's On Campus?</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
      <div className="register-container">
        <h1>Create an Account!</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
      <footer className="footer">
        <p>
          &copy; 2023 CSESoc-Trainee 4 | Visit our repository{' '}
          <Link to="https://github.com/csesoc/trainee-4-23t1">here</Link>
        </p>
      </footer>
    </div>
  );
};

export default RegisterPage;
