import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logoImage from '../assets/img/logo.png';

const HomePage = () => {
  const descriptionRef = useRef(null);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselWords = ['Discover Meaningful Connections', 'Escape Loneliness', 'Become a BNOC', 'Create Meaningful Memories', 'Recover from Emotional Pain', 'Meet like Minded People']; 

  const handleExploreClick = () => {
    descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselWords.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [carouselIndex, carouselWords.length]);

  return (
    <div>
      <Helmet>
        <title>Home | Who's On Campus?</title>
      </Helmet>
      <nav className="navbar">
        <h1 className="logo">CSESoc Projects</h1>
        <ul className="nav-links">
          <li><a href="\login">Log In</a></li>
        </ul>
      </nav>
      {/* Page 1 */}
      <div className='landing-container'>
        <div className="content-wrapper">
          <div className="side-by-side-container">
            <img src={logoImage} alt="Application logo" />
            <div className="text-container">
              <span className='slogan-container'>
                <h4>Trainee 4 presents</h4>
                <h1>Who's On Campus?</h1>
                <h4>Connecting lonely UNSW students with new friends since 2023.</h4>
                <div className="button-container">
                  <button className="button" onClick={handleExploreClick}>Explore</button>
                  <span className="button-gap" />
                  <Link to="/" className="button">Rizz Tips</Link>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Page 2 */}
      <div className='description-container' ref={descriptionRef}>
        <div className="purpose-container">
          <h2>We help YOU</h2>
            <h3 className='help-container'>{carouselWords[carouselIndex]}</h3>
        </div>
      </div>

      {/* Page 3 */}
      <div className='map-showcase-container'>

      </div>

      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
