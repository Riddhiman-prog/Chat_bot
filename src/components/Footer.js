import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/riddhiman-rakshit-12923228b" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/swaggy_riddrii?igsh=c2g5MnlieW0weWdt" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
