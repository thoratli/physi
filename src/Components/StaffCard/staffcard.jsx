// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './stylesStaff.css';
// import styles from "./ComponentName.module.css";
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';


//todo: gera þetta almennilega.
//mynd vinstra megin og texti hægra megin til dæmis
//nota síðan skránna í src -> data -> staff.json til þess að það sé hægt að eiga við í framtíðinni
function StaffList() {
    // const { staffmembers } = props;

    return (
        <Card className='staffcard-container'>
            <div className='staff-left-side'>
                <div>
                    <Card.Img className='card-image' src={'/static/images/hlynur1.jpg'} />
                </div>
            </div>
            <div className='staff-right-side'>
                <div>
                    <h1 className='staff-header'> Hlynur Helgi Arngrímsson</h1>
                    <h2 className='staff-subheader'> BSc Master Phd</h2>
                    <p>
                        Bambled it to make a type specimen book.
                        unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions o</p>
                </div>
                <div>
                    <div>
                        <h2 className='staff-header'>Menntun:</h2>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                    </div>
                    <div>
                        <h2 className='staff-header'>Starfsreynsla:</h2>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                    </div>
                    <div>
                        <h2 className='staff-header'>Námskeið/Sérhæfing:</h2>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                    </div>
                    <div>
                        <h2 className='staff-header'>Áhugamál:</h2>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                        <p className='staff-text'>Cras justo odio</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default StaffList;