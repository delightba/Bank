import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/lg.png';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      {/* Logo linking to Home */}
      <Link to="/" style={styles.logoLink}>
        <img src={Logo} alt="logo" style={styles.logo} />
      </Link>
      <ul style={styles.navLinks}>
        <li><Link to="/pricing" style={styles.link}>Pricing</Link></li>
        <li><Link to="/referral" style={styles.link}>Referral</Link></li>
        <li><Link to="/company" style={styles.link}>Company</Link></li>
        <li><Link to="/support" style={styles.link}>Support</Link></li>
        <li style={styles.buttonContainer}>
          {/* Login button with hover effects */}
          <button style={styles.loginButton}>
            <Link to="/login" style={styles.buttonLink}>Login</Link>
          </button>
        </li>
        <li style={styles.buttonContainer}>
          {/* Sign-Up button with hover effects */}
          <button style={styles.signupButton}>
            <Link to="/signup" style={styles.buttonLink}>Sign-Up</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: '#fff',
    padding: '5px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    height: '60px',
  },
  logo: {
    width: '120px',
    height: 'auto',
  },
  logoLink: {
    textDecoration: 'none',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  loginButton: {
    border: '2px solid #ffae42',  // Border color for login button
    backgroundColor: 'transparent',
    color: '#ffae42',  // Text color for login button
    borderRadius: '15px',
    padding: '8px 15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  signupButton: {
    backgroundColor: '#ffae42',  // Background color for sign-up button
    color: '#fff',
    borderRadius: '15px',
    padding: '8px 15px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  buttonLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
  },
};

// Hover effects for buttons (Directly on the button styles)
styles.loginButton[':hover'] = {
  backgroundColor: '#ffae42',  // Change background color for login button on hover
  color: '#fff',  // Change text color for login button on hover
};

styles.signupButton[':hover'] = {
  backgroundColor: '#000000',  // Change background color for sign-up button on hover
  color: '#fff',  // Keep text color white for sign-up on hover
};

export default Navbar;
