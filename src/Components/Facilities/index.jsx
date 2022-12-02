// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './stylesFacility.css';
// import styles from "./ComponentName.module.css";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';


//todo: gera þetta almennilega.
//mynd vinstra megin og texti hægra megin til dæmis
//nota síðan skránna í src -> data -> staff.json til þess að það sé hægt að eiga við í framtíðinni
function Facility() {
    return (
        <div className='facility-container'>
            <div>
                <img alt='mynd af hlyn' className='card-image' src={'/static/images/hlynur1.jpg'} />
            </div>
            <div>
                <div>
                    <p>
                        Texti um aðstöðuna og einhverjar myndir, jafnvel í carousel eða bara sem grid</p>
                </div>
            </div>
        </div>
    );
}

export default Facility;