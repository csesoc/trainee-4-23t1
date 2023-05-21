import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import "../assets/css/style.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    // Reset form fields
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div>
      <Helmet>
        <title>Login | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <h1 className="logo">Who's On Campus?</h1>
        <ul className="nav-links">
          <li><a href="\register">Register</a></li>
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
          <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit">Log In</button>
          <p>Don't have an account? <a href="\register">Register</a></p>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>
    </div>
  );
};

export default LoginPage;
