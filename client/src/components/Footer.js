import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import  AuthService from '../utils/auth'

const Footer = () => {
  const { logout } = AuthService;
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/" className="footer-button">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="footer-button">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/main" className="footer-button">
              Main
            </Link>
          </li>
          <li>
            <Link to="/" className='footer-button' onClick={()=>logout()}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
