import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ activeSection, handleNavigation }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={activeSection === null ? 'active' : ''}
            onClick={() => handleNavigation(null)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className={activeSection === 'profile' ? 'active' : ''}
            onClick={() => handleNavigation('profile')}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/main"
            className={activeSection === 'main' ? 'active' : ''}
            onClick={() => handleNavigation('main')}
          >
            Main
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
