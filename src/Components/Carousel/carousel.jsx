import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Card from 'react-bootstrap/Card';

//todo Import Images
// import hlynur1 from './src/public/hlynur1'

//make it a reusable component with src and alt as parameter and one class that covers the look
//


function Slider() {
  return (
    <Carousel style={{ width: '70%'}}>
      <Carousel.Item>
        <Card className='staffcard-container' style={{ display: 'flex', flexDirection: 'row'}}>
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
      </Carousel.Item>
    </Carousel >
  );
}

export default Slider;