// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './stylesContact.css';
import React, { useRef } from 'react';
import emailjs, { init } from "@emailjs/browser";
// import Card from 'react-bootstrap/Card';
// import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

// import styles from "./ComponentName.module.css";
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';


//todo: gera þetta almennilega.
//mynd vinstra megin og texti hægra megin til dæmis
//nota síðan skránna í src -> data -> staff.json til þess að það sé hægt að eiga við í framtíðinni

export const ContactUs = () => {
    init("user_xxxxxxxxxxxxxxxxxxx");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ql1524n', 'template_hznyocb', form.current, '1AY9A_9e-03LnVSus')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <form ref={form} className='card-container' onSubmit={sendEmail}>
            <div className='left-side'>
                <div className='element-container'>
                    <label htmlFor='name' className='form-element form-label'>Fullt Nafn</label>
                    <input required id='name' className='form-input' type="text" />
                </div>
                <div className='element-container'>
                    <label htmlFor='email' className='form-element form-label' >Netfang</label>
                    <input required id='email' className='form-input' type="text" />
                </div>
                <div className='element-container'>
                    <label htmlFor='phone' className='form-element form-label'>Símanúmer</label>
                    <input required id='phone' className='form-input' type="text" />

                </div>
                {/* <div className='element-container'>
                    <label for='doctor' className='form-element form-label'>Ég er með beiðni frá lækni</label>
                        <button id='doctor' onChange={handleDoctor} value="false" className='form-input' type='checkbox' />
                </div> */}
                <div className='element-container'>
                    <label htmlFor='description' className='form-element form-label'>Lýstu vandamálinu</label>
                    <textarea required id='description' className='description form-input' placeholder='Settu inn stutta lýsingu á því hvað er að hrjá þig' />
                </div>
                <button className='submit-button' type='submit'>Senda</button>
            </div>
            <div className='right-side'>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <br />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <br />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
        </form>
    );

}


// const handleDoctor = () => {
//     alert('testing!')
//     // setChecked(!checked);
//   };

export default ContactUs;