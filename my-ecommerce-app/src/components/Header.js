import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="images/logo.png" alt="Company Logo" style={{width: '50px'}} /> 
      </div>
      <div className="company-name">
        <h1 style={{ textAlign: 'right' }}>Company Name</h1>
      </div>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
