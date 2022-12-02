import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
//todo Import Images
// import hlynur1 from './src/public/hlynur1'

//make it a reusable component with src and alt as parameter and one class that covers the look
//


function Slider() {
    return (
    <Carousel>
      <Carousel.Item>
        <img style={{height: 'auto', width: 300}}
          src={'/static/images/hlynur1.jpg'}
          alt="Kóngurinn og vinur"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img style={{height: 'auto', width: "30%"}}
          src={'/static/images/hlynur2.jpg'}
          alt="Eigendur"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel >
  );
}

export default Slider;