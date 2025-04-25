
import React from 'react';
import './header.css';

function header() {
  return (
    <header className="header">
      <div className="logo">LOGO</div>

      <nav className="nav-links">
        <ul>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>

      <div className="header-icons">
        <span role="button" aria-label="Search">🔍</span>
        <span role="button" aria-label="Profile">👤</span>
        <span role="button" aria-label="Cart">🛒</span>
        <span role="button" aria-label="Wishlist">❤️</span>
        <span role="button" aria-label="Language Selector">
          ENG ▼
        </span>
      </div>
    </header>
  );
}

export default header;

