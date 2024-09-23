// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className='header1'>
    <div className='heading'>
    <h5><i><u>Portfolio</u></i></h5>
    <h1><b>Sham Chalase</b></h1>
    </div>
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="tel:+917666993170"><i className="fas fa-phone"></i> 7666993170</a></li>
        <li><a href="mailto:shamchalase@gmail.com"><i className="fas fa-envelope"></i> shamchalase@gmail.com</a></li>
        <li><a href="https://github.com/shamchalase" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/shamchalase" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
