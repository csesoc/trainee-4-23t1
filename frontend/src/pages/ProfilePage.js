import React, { useState } from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
// import elon from '../assets/img/elon.jpg';
// import usersData from '../users.json';

const ProfilePage = ({ user }) => {
  const [tab, setTab] = useState(0);
  const [profileImage, setProfileImage] = useState(null);

  function handleImageUpload(event) {
    const selected_image = event.target.files[0];
    const imgurl = URL.createObjectURL(selected_image);
    setProfileImage(imgurl);
  }

  const handleSwitchTab1 = () => {
    setTab(0);
  };

  const handleSwitchTab2 = () => {
    setTab(1);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <h1 className="logo">Who's On Campus?</h1>
        </Link>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
      <div className="profile-container">
        <div className="photocard">
          <h2 style={{ marginBottom: '0px' }}>{user.name}</h2>
          <h3 style={{ color: 'grey', margin: 0 }}>@{user.username}</h3>
          <img className="pfp" src={profileImage || user.profilePic} alt="Alternate Image" />
          <label htmlFor="imageUpload" className="photo_changing" style={{ marginBottom: 0 }}>
            Upload New Photo
            <input type="file" id="imageUpload" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
          </label>
          <h4 style={{ marginTop: '10px' }}>
            <span style={{ fontWeight: 'normal' }}>Member since:</span> {user.memberSince}
          </h4>
        </div>
        <div className="edit_space">
          <div className="orientation">
            <h1 className="edit-profile">Edit Profile</h1>
            <div className="divide">
              <strong>
                <u className={`underline-bottom ${tab === 0 ? 'turn_black' : 'grey_underline'}`} style={{ marginRight: '20px' }} onClick={handleSwitchTab1}>
                  User Info
                </u>
              </strong>
              <strong>
                <u className={`underline-bottom ${tab === 1 ? 'turn_black' : 'grey_underline'}`} onClick={handleSwitchTab2}>
                  Details
                </u>
              </strong>
            </div>
            {tab === 0 ? (
              <div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">Full Name</h4>
                    <input className="profile-input" value={user.name} />
                  </div>
                  <div>
                    <h4 className="profile-question">Username</h4>
                    <input className="profile-input" value={user.username} />
                  </div>
                </div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">Password</h4>
                    <input type="password" className="profile-input" value={user.password} />
                  </div>
                  <div>
                    <h4 className="profile-question">Confirm Password</h4>
                    <input type="password" className="profile-input" value={user.password} />
                  </div>
                </div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">Email Address</h4>
                    <input className="profile-input" value={user.email} />
                  </div>
                  <div>
                    <h4 className="profile-question">Confirm Email Address</h4>
                    <input className="profile-input" value={user.email} />
                  </div>
                </div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">Bio</h4>
                    <input className="profile-input" style={{ width: '215%' }} value={user.bio} />
                  </div>
                </div>
                <div className="photo_changing" style={{ width: 85, marginTop: '10px' }}>
                  Update
                </div>
              </div>
            ) : (
              <div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">Name:</h4>
                    <input className="profile-input" value={user.name} />
                  </div>
                  <div>
                    <h4 className="profile-question">Address</h4>
                    <input className="profile-input" value={user.address} />
                  </div>
                </div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">City:</h4>
                    <input className="profile-input" value={user.city} />
                  </div>
                  <div>
                    <h4 className="profile-question">Zip Code:</h4>
                    <input className="profile-input" value={user.zipCode} />
                  </div>
                </div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">State:</h4>
                    <input className="profile-input" value={user.state} />
                  </div>
                  <div>
                    <h4 className="profile-question">Card Number</h4>
                    <input className="profile-input" value={user.cardNumber} />
                  </div>
                </div>
                <div className="divide">
                  <div style={{ marginRight: '50px' }}>
                    <h4 className="profile-question">Expiry Date</h4>
                    <input className="profile-input" value={user.expiryDate} />
                  </div>
                  <div>
                    <h4 className="profile-question">CVV:</h4>
                    <input className="profile-input" value={user.cvv} />
                  </div>
                </div>
                <div className="photo_changing" style={{ width: 85, marginTop: '10px' }}>
                  Update
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>
          &copy; 2023 CSESoc-Trainee 4 | Visit our repository <a href="https://github.com/csesoc/trainee-4-23t1">here</a>
        </p>
      </footer>
    </div>
  );
};

export default ProfilePage;
