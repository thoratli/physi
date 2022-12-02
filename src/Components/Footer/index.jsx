// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './stylesFooter.css';

function FooterInfo() {
    return (
        <div className="bottom-container">
            <div className='left'>
                <h1>Opnunartími</h1>
                <p>ste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
                   iunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                   consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                   incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                    Quis autem vel eum iure re</p>

            </div>
            <div className='right'>
                <h1>Verðskrá</h1>
                <p>pisci velit, sed quia non numquam eius modi tempora 
                   incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                    suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                    Quis autem vel eum iure re</p>


            </div>
        </div>
    );
}

export default FooterInfo;