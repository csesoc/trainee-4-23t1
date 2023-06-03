import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import "../assets/css/style.css";
import { Helmet } from 'react-helmet';

const InputPage = () => {
    const questions = [
        "What is your nickname",
        "What do you study",
        "Which days are you on campus",
        "What time do you usually leave campus",
        "What are you interested in"

    ]

    const placeholders = [
        "Name",
        "Degree Name",
        "Days",
        "test",
        "Interests"
    ]

    const input_type = [
        "text",
        "text",
        "text",
        "time",
        "text"
    ]

    const info = [
        'Name',
        'Degree',
        'Availability',
        'Date',
        'Submit'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        if (fadeIn) {
          const timer = setTimeout(() => {
            setFadeIn(false); // Remove the animation class after the animation duration
          }, 500);
          return () => clearTimeout(timer);
        }
      }, [fadeIn]);

    const question = questions[currentIndex];
    const placeholder = placeholders[currentIndex];

    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log('Answer:', answer);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setFadeIn(true);
        //setAnswer('');
      }
      else {
        setSubmitted(true);
        setShowConfetti(true); // Set animation state to trigger the animation
      console.log('Answer:', answer);
      setShowConfetti(true); // Set animation state to trigger the animation
    }
    };

    const handleHome = () => {
        window.location.href = '../home';
    }
    const handleAnswerChange = (selectedOptions) => {
        const the_answer = selectedOptions.map(option => option.value);
        setAnswer(prevAnswer => {
            const updatedAnswers = [...prevAnswer];
            updatedAnswers[currentIndex] = the_answer;
            return updatedAnswers;
        });
       // setAnswer(e.target.value)
    }

    const handleCircleClick = (clickedIndex) => {
        if (clickedIndex <= currentIndex) {
            setCurrentIndex(clickedIndex);
            setFadeIn(true);
        }
    }

    const handleGoBack = () => {
        if (currentIndex > 0) {
            console.log(currentIndex);
            console.log(answer);
            setCurrentIndex(currentIndex - 1);
            setFadeIn(true);
        }
        // BUG: CANNOT GO BACK TO "What do they study" from "What days are they on campus"
        if (currentIndex === 2) {
            setCurrentIndex(0);
        }
    }

    // Find people around you that are similar to you by first telling me about yourself
    return (
        <div>
            <Helmet>
                <title>About you | Who's On Campus?</title>
            </Helmet>
            <nav className="navbar">
                <Link to='/'  style={{ textDecoration: 'none', color: '#fff' }}>
                <h1 className="logo">Who's On Campus?</h1>
                </Link>
                <ul className="nav-links">
                <li><Link to="/login">Logout</Link></li>
                </ul>
            </nav>
                {!submitted ? (
                <div className='input-container'>
                    <p className='summary'>Find people around you that are similar to you by first telling me about yourself</p>
                        <br></br>
                        <h1 className={`${fadeIn ? 'question-label' : ''}`}>{question}</h1>
                    <form className='input-form' onSubmit={handleSubmit}>
                        {currentIndex === 2 ? (
                                <Select
                                    isMulti
                                    options={[
                                        { value: 'Monday', label: 'Monday' },
                                        { value: 'Tuesday', label: 'Tuesday' },
                                        { value: 'Wednesday', label: 'Wednesday' },
                                        { value: 'Thursday', label: 'Thursday' },
                                        { value: 'Friday', label: 'Friday' },
                                        { value: 'Saturday', label: 'Saturday' },
                                        { value: 'Sunday', label: 'Sunday' },
                                    ]}
                                    onChange={handleAnswerChange}
                                    placeholder={placeholder}
                                    required
                                />
                            ) : (
                                <input
                                    type={input_type[currentIndex]}
                                    id="answer"
                                    placeholder={placeholder}
                                    value={answer[currentIndex] || ''}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setAnswer(prevAnswer => {
                                            const updatedAnswer = [...prevAnswer];
                                            updatedAnswer[currentIndex] = value;
                                            return updatedAnswer;
                                        });
                                    }}
                                    required
                                />
                            )}
                        {currentIndex > 0 ? (
                            <button className='back' onClick={handleGoBack}>Back</button>
                            ) : null}
                            <button type="submit">{currentIndex === questions.length - 1 ? 'Submit' : 'Next'}</button>
                        </form>
                    <div className='progress'>
                        {questions.map((_, index) => (
                        <>
                            <div className={`circle ${index <= currentIndex ? 'colored' : ''}`}
                            onClick={() => handleCircleClick(index)}>
                                <div>{index + 1}</div>
                            </div>
                            {index < questions.length - 1 && <div
                            className={`line ${index <= currentIndex - 1 ? 'colored' : ''}`}
                            ></div>}
                        </>
                        ))}
                    </div>
                    <div className='progress_text'>
                        {info.map((text, index) => (
                            <div className={`${index <= currentIndex ? 'colored' : ''}`}>
                                {text}
                            </div>
                        ))}
                    </div>
                    </div>
                ): (
                    <div className='input-container'>
                        {showConfetti && (
                        <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        numberOfPieces={1000}
                        run={Confetti}
                        />  )}
                        <div className='input-form'>
                        <div class="checkmark-circle">
                            <div class="background"></div>
                            <div class="checkmark draw"></div>
                        </div>
                        <h1>
                            Congratulations!
                        </h1>
                        <p>
                           You can now go make more friends
                        </p>
                        <button type="submit" onClick={handleHome}>Next</button>
                        </div>
                    </div>

                )}
            <footer className="footer">
                <p>&copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a></p>
            </footer>
        </div>
    )
  };
  export default InputPage;