// import logo from './logo.svg';
import Navibar from './Components/Header/header';
import React from 'react';
import ImageContainer from './Components/ImageContainer/imageContainer';
import Spacer from './Components/Spacer/spacer';
import FooterInfo from './Components/Footer/footer';
import './App.css';
// import Slider from './Components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stafflist from './Components/StaffCard/staffcard';
import AboutUs from './Components/AboutUs/aboutUs';
import Facility from './Components/Facilities/facilities';
import Contact from './Components/Contact/contact'
// import staffData from './staff.json'


function App() {
  return (
    <div className="App">
      <header>
        {/* navigation bar */}
        <Navibar id="home" />
      </header>

      <main>
        <section>
          {/* <Slider/> */}
          <Spacer />
          <ImageContainer />
          <Spacer />
        </section>

        <section id="aboutUs">
          <AboutUs />
        </section>

        <Spacer />

        <section id="staff">
          <Stafflist/>
        </section>

        <Spacer />

        <section id="facility">
          <Facility />
        </section>

        <Spacer />

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer>
        <FooterInfo />
      </footer>
    </div>
  );
}


export default App;
