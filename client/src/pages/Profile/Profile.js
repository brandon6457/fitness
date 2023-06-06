import React from 'react';
import './Profile.css';

const ProfilePage = () => {
  const [isOnline, setIsOnline] = React.useState(false);

  const handleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <div className="profile-page">
      <div className="profile-picture">
        {/* <img src="profile-picture.jpg" alt="Profile" /> */}
      </div>

      <div className="user-info">
        <h2>EXAMPLE NAME</h2>
        {isOnline ? (
          <div className="online-indicator online">Online</div>
        ) : (
          <div className="online-indicator offline">Offline</div>
        )}
        <div className="workouts">
          <h3>Workouts</h3>
          <ul>
            <li>FAV WORKOUT 1</li>
            <li>FAV WORKOUT 2</li>
            <li>FAV WORKOUT 3</li>
          </ul>
        </div>
      </div>

      <button className="online-button" onClick={handleOnlineStatus}>
        {isOnline ? 'Go Offline' : 'Go Online'}
      </button>
    </div>
  );
};

export default ProfilePage;
