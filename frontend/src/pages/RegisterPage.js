import React, { useState } from 'react';
import "../assets/css/style.css";
import { Helmet } from 'react-helmet';
import { URL_PORT } from '../backend';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
  

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
    
      const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
      };
    
      const handleAddressChange = (e) => {
        setAddress(e.target.value);
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

        // Maybe add username and profileImgUrl to the form?
        
        /*
        fetch(`http://localhost:${URL_PORT}/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password, phoneNumber, address }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.error) {
                alert(data.error);
              } else {
                navigate('/home');
              }
            }
        );
        */
            
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
        setAddress('');
    };

  return (
    <div>
      <Helmet>
        <title>Register | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <h1 className="logo">Who's On Campus?</h1>
        <ul className="nav-links">
          <li><a href="/login">Log In</a></li>
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
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={handleAddressChange}
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
          <p>Already have an account? <a href="/login">Log In</a></p>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>
    </div>
  );
};

export default RegisterPage;
