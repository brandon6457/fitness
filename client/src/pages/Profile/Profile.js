import React from 'react';
<<<<<<< Updated upstream
=======
import './Profile.css';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Container,
} from '@nextui-org/react';

const ProfilePage = () => {
  const [isOnline, setIsOnline] = React.useState(false);

  const handleOnlineStatus = () => {
    setIsOnline(!isOnline);
  };
>>>>>>> Stashed changes

const Profile = () => {
  return (
<<<<<<< Updated upstream
    <main>
      <h2>PROFILE COMING SOON</h2>
    </main>
=======
    <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
      <Card css={{ mw: '420px', p: '20px' }}>
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
    </Card>
    </Container>
>>>>>>> Stashed changes
  );
};

export default Profile;
