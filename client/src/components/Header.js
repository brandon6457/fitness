import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import AuthService from '../utils/auth';

const Header = () => {
  const logout = () => {
    AuthService.logout();
  };

  return (
    <div className="mainHeader">
      <h1 className="headerTitle">
        <FontAwesomeIcon icon={faDumbbell} className="icon" />
        Fitness <br />
        
        <span className="subTitle">(into your day)</span>
      </h1>

      <ul className="headerButtons">
        <li>
          <Link to="/" className="headerButton">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="headerButton">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/main" className="headerButton">
            Main
          </Link>
        </li>
        <li>
          <Link to="/" className="headerButton" onClick={logout}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
