import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logoImage from '../assets/img/logo.png';
import MapExample from '../components/MapExample';
import '@fortawesome/fontawesome-free/css/all.css';

const HomePage = () => {
  const descriptionRef = useRef(null);
  const landing = useRef(null);
  const mapRef = useRef(null);

  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselWords = [`★★★★✩ "I discover meaningful connections."`, `★★★★★ "I escaped loneliness."`, `★★★★✩ "I became a BNOC."`, `★★★★★ "I created meaningful memories."`, `★★★★★ "I recovered from emotional pain."`, `★★★★✩ "I met like minded people."`]; 
  const handleExploreClick = () => {
    descriptionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContinueClick = () => {
    mapRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  const scrollToTop = () => {
    landing.current.scrollIntoView({ behavior: 'smooth' });
    /*
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });*/
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselWords.length);
    }, 500);

    return () => clearTimeout(timer);
  }, [carouselIndex, carouselWords.length]);

  /*
          <div className="image-container">
            <img src={amongus}></img></div> */
  return (
    <div className='landing'>
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
      <div className='landing-container' ref={landing}>
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
          <h3 className='help-container'>{carouselWords[carouselIndex]}</h3>
          <h4 style={{ position: "relative", bottom: "3vh", textAlign: "right" }}> - Edward Lukman</h4>
          <button className="custom-button" onClick={handleContinueClick}>
            Continue
          </button>  
        </div>
      </div>

      {/* Page 3 */}
      <div className='map-showcase-container' ref={mapRef}>
        <h2>Discover new friends through an interactive map.</h2>
        <div className='mapexample-container'>
          <MapExample/>
        </div>
        <div className="join-button-container">
          <Link to="/register" className="button">Join us!</Link>
        </div>
        <div className='scroll-top-container'>
          <li href="" className="scroll-top-button" onClick={scrollToTop}>
            <i className="fas fa-angle-up"></i>
          </li>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
      </footer>

    </div>
  );
};

export default HomePage;
