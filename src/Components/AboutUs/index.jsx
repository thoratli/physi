import React from 'react';
import './stylesAbout.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <div>
                <img style={{ height: 'auto', width: "300px" }}
                    src={'/static/images/hlynur1.jpg'}
                    alt="Kóngurinn og vinur"
                />
            </div>
            <div>
                <h1>Um okkur</h1>
                <p className='about-us-text'><span className='first-letter'>S</span>júkraþjálfun
                Grafarholts er fyrir aumingja sem eru orðnir þreyttir á því að vera aumingar.
                 ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
                    <p className='about-us-text'>
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt.
                    uia non numquam eius modi tempora incidunt ut labore
                    ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure
                    sse quam nihil molestiae consequatur,
                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </div>

        </div>
    );
}

export default AboutUs;