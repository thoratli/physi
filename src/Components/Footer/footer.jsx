// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './stylesFooter.css';

function FooterInfo() {
    return (
        <div className="bottom-container">
            <div className='bottom-left'>
                <div>
                    <h1>Staðsetning</h1>
                    <p>Fínagata 16, 113 Grafarholt</p>
                    <p>MYND AF KORTI</p>
                </div>
                <div>
                <h1>Verðskrá</h1>
                <p>Fyrsti tími (skoðunartími): 14.900</p>
                <p>Aðrir tímar: 9.900</p>
                    </div>
            </div>
            <div className='bottom-right'>
                <h1>Verðskrá</h1>
                <p>Pláss fyrir texta eða myndir</p>


            </div>
        </div>
    );
}

export default FooterInfo;