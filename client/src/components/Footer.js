import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <div className="logoContainer">
            <FontAwesomeIcon icon={faDumbbell} className="logoIcon" />
            <h3 className="logoText">FitnessHomies</h3>
          </div>
          <p className="footerText">
            A fitness app designed to help you stay fit and active.
          </p>
        </div>
        <div className="footerSection">
          <h4 className="sectionTitle">Explore</h4>
          <ul className="footerLinks">
            <li>
              <a
                href="/"
                className="footerLink"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="footerLink"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="footerLink"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/Main"
                className="footerLink"
              >
                Main
              </a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h4 className="sectionTitle">Connect</h4>
          <ul className="footerSocialLinks">
            <li>
              <a
                href="https://github.com/brandon6457/fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="footerSocialLink"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="footerSocialLink"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p className="footerText">
          &copy; {new Date().getFullYear()} FitnessDudes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

