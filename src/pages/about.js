import React from 'react';
import { Helmet } from 'react-helmet';

import '../assets/css/stylesheet.css';

// Import images
import abtImg1 from '../assets/images/about/home-abt-1.webp';
import abtImg2 from '../assets/images/about/home-abt-2.webp';
import abtImg3 from '../assets/images/about/home-abt-3.webp';
import abtImg4 from '../assets/images/about/about-inst-pic.webp'
import abtimg5 from '../assets/images/about/about-pic-1.webp'
import abtImg6 from '../assets/images/about/about-pic-2.webp'


const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Center for South Asian Music</title>
      </Helmet>

    <span className='innerPageBlock'></span>
      <section className='abtSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>About</h2>
                <p>The Center for South Asian Music which houses the Music Room and the South Asian Music Minor, seeks to engage students on multiple levels of consciousness, to create a deep symbiosis between various areas of learning and fields of inquiry. The Music Room as a space allows for an experiential musical learning, the South Asian Music Minor builds upon this musical foundation to serve as a vehicle for interdisciplinary learning, kinesthetic cultural experience, and for reclaiming important cultural space. </p>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
            <li><img src={abtImg1} alt="Cultural fusion at Habib University" /></li>
            <li><img src={abtImg2} alt="Immersive learning opportunities" /></li>
            <li><img src={abtImg3} alt="South Asian Music Minor" /></li>
          </ul>
        </div>
      </section>

    {/* meeesge section */}
    <section className='messSec padSec'>
    <div className="container">
        <div className="row">
          <div className="col-9 mx-auto about-main-mess-box">
            <div className='about-main-mess-wrap'>
            <div className="row about-mess-head">
              <h2 className='globalHeading'>Founding Director's Message</h2>
              <h3>Yosuf Kerai</h3>
            </div>
            <div className="row about-mess-mini">
              <div className="col-2 mess-semi-colon-1">
                <img src={abtImg6} alt="image" className="img-fluid" />
              </div>
              <div className="col-8">
                <p >
                  “The vast and complex repertoire of techniques and modes that
                  constitute both the melodic and rhythmic universes of South
                  Asian music render this art form as one of the greatest
                  achievements of this region. It makes for not only an
                  extremely robust and rich musical inheritance for the people
                  of South Asia, but its evolution embodies the trends of
                  modernization colonial South Asia experienced. However, the
                  systemic erasure of South Asian musical heritage in Pakistan
                  has pronounced the need for institutional recognition and
                  facilitation of students to engage with this music that is
                  integral to South Asian aesthetics and identity.”
                </p>
              </div>
              <div className="col-2 mess-semi-colon-2">
                <img src={abtimg5} alt="image" className="img-fluid" />
              </div>
            </div>
            </div>
            <div className="about-keraiPic">
              <img src={abtImg4} alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};

export default About;
