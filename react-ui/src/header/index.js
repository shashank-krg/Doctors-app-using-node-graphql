import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import imgLogo from '../assets/img/logo.png';


const Header = () => (
  <div className="header">
    <div>
      <img src={imgLogo} alt="logo" />
    </div>
    <div>
      <ul className="navbar">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/login" className="link">
            Doctors Panel
          </Link>
        </li>
        <li>
          <Link to="/appointment" className="link">
            Book an Appointment
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
