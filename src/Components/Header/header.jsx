// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './stylesHeader.css';

function Navibar() {
  return (
    <div className="header">
      <img alt="logo" className='logo' src={'/static/images/logo.png'} />
      <div>
        <a href="#aboutUs" className='link'>Um okkur</a>
      </div>
      <div>
        <a href="#staff" className='link'>Starfsmenn</a>
      </div>
      <div>
        <a href="#facility" className='link'>Aðstaða</a>
      </div>
      <div>
        <a href="#contact" className='link'>Hafa samband</a>
      </div>
    </div>
  );
}

export default Navibar;