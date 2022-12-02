// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './stylesContact.css';
// import styles from "./ComponentName.module.css";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';


//todo: gera þetta almennilega.
//mynd vinstra megin og texti hægra megin til dæmis
//nota síðan skránna í src -> data -> staff.json til þess að það sé hægt að eiga við í framtíðinni
function Contact() {
    return (
        <div className='card-container'>
            <div>
                <div>
                    <li>Nafn</li>
                    <li>Netfang</li>
                    <li>Sími</li>
                    <li>Uppáskrifað frá Lækni</li>
                    <li>Textabox</li>
                </div>
            </div>
        </div>
    );
}

export default Contact;