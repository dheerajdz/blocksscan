import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Replace with the actual image or SVG */}
        <img src="logo.png" alt="OpenScan Logo" />
      
      </div>

      <ul className="navbar-menu">
        <li><a href="#products">Products</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blockrpc">BlockRpc</a></li>
        <li><a href="#industries">Industries</a></li>
      </ul>

      <div className="navbar-button">
        <button>Book a Demo</button>
      </div>
    </nav>
  );
}

export default Navbar;
