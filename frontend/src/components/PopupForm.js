import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupForm() {
  const [location, setLocation] = useState('');
  const [durationFrom, setDurationFrom] = useState('');
  const [durationTo, setDurationTo] = useState('');
  const [description, setDescription] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDurationFromChange = (event) => {
    setDurationFrom(event.target.value);
  };

  const handleDurationToChange = (event) => {
    setDurationTo(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Location:', location);
    console.log('Duration From:', durationFrom);
    console.log('Duration To:', durationTo);
    console.log('Description:', description);
  };

  return (
    <div className='popup-container'>
      <h4>Share your current location with friends</h4>
      <Popup
        trigger={<button style={{ fontFamily: 'sans-serif', fontSize: '16px', borderStyle: 'none'}}> Update Location </button>}
        modal
        nested
      >
        {close => (
          <div className='modal'>
            <div className='location-form'>
              <form onSubmit={handleSubmit}>
                <h2>Location</h2>
                <input
                  type='text'
                  value={location}
                  onChange={handleLocationChange}
                  className='input-field'
                />
                <div className='duration-container'>
                  <div>
                    <h2>From</h2>
                    <input
                      type='time'
                      value={durationFrom}
                      onChange={handleDurationFromChange}
                      className='input-field'
                    />
                  </div>
                  <div>
                    <h2>To</h2>
                    <input
                      type='time'
                      value={durationTo}
                      onChange={handleDurationToChange}
                      className='input-field'
                    />
                  </div>
                </div>
                <h2>Description</h2>
                <textarea
                  value={description}
                  onChange={handleDescriptionChange}
                  className='textarea-field'
                />
                <div className='submit-container'>
                  <button onClick={close} type='submit' className='submit-button'>Update</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
