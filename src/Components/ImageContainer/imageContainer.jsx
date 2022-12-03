// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './stylesImage.css';

// import styles from "./ComponentName.module.css";


function ImageContainer() {
  return (
    <div className='container'>
      <img className='image'
        src={'/static/images/hlynur2.jpg'}
        alt="Eigendur"
      />
      <img className='image'
        src={'/static/images/hlynur1.jpg'}
        alt="Eigendur"
      />
        <img className='image'
        src={'/static/images/hlynur1.jpg'}
        alt="Eigendur"
      />
    </div>
  );
}

export default ImageContainer;