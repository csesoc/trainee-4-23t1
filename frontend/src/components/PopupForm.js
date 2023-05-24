import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function PopupForm() {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Location:', location);
  };

    return (
        <div className='popup-container'>
            <h4>What's your Location?</h4>
            <Popup trigger=
                {<button style={{ fontFamily: 'sans-serif', fontSize: '16px' }}> Change Location </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='location-form'>
                            <form onSubmit={handleSubmit}>
                              <label>
                                <h2>Location</h2>
                                <input
                                  type='text'
                                  value={location}
                                  onChange={handleLocationChange}
                                />
                              </label>
                              <button type='submit'>Update</button>
                            </form>
                            </div> 
                            <div>
                                <button onClick=
                                    {() => close()}>
                                      Done!
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};