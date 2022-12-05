// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from 'react';
import './stylesHeader.css';

function Navibar() {
  return (
    <div className="header">
      <img alt="cover" className='cover' src={'/static/images/heilsa.jpg'} />

      <div className='nav-bar'>
        {/* <img alt="logo" className='link' src={'/static/images/logo.png'} /> */}
        <a href="#aboutUs" className='link'>Um okkur</a>
          <a href="#staff" className='link'>Starfsmenn</a>
          <a href="#facility" className='link'>Aðstaða</a>
          <a href="#contact" className='link'>Hafa samband</a>
      </div>
    </div>
  );
}

export default Navibar;
