import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";


import CustomSlider from '../components/custom-slider';


// Import images
import abtImg1 from "../assets/images/about/home-abt-1.webp";
import abtImg2 from "../assets/images/about/home-abt-2.webp";
import abtImg3 from "../assets/images/about/home-abt-3.webp";
import abtImg4 from "../assets/images/about/about-inst-pic.webp";
import abtimg5 from "../assets/images/about/about-pic-1.webp";
import abtImg6 from "../assets/images/about/about-pic-2.webp";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Center for South Asian Music</title>
      </Helmet>

      <span className="innerPageBlock"></span>
      <section className="abtSec padSec top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading">About</h2>
                <p>
                  The Center for South Asian Music which houses the Music Room
                  and the South Asian Music Minor, seeks to engage students on
                  multiple levels of consciousness, to create a deep symbiosis
                  between various areas of learning and fields of inquiry. The
                  Music Room as a space allows for an experiential musical
                  learning, the South Asian Music Minor builds upon this musical
                  foundation to serve as a vehicle for interdisciplinary
                  learning, kinesthetic cultural experience, and for reclaiming
                  important cultural space.
                </p>
              </div>
            </div>
          </div>
          <div className="home-event-pics">
          {isMobile && (<ul className="abtImagesWrap">
            <li>
              <img src={abtImg1} alt="Music Room interior" />
            </li>
            <li>
              <img src={abtImg2} alt="Music Room instruments" />
            </li>
            <li>
              <img src={abtImg3} alt="Music Room practice session" />
            </li>
          </ul>)}
            {!isMobile && (
              <div className='carous'>
              <CustomSlider showDots={true} showArrows={false} autoplay={true} autoplaySpeed={5000} scrollOnSmallScreens={true}>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={abtImg1} alt="Khayal concert event" />
                    </div>                
                </div>
                <div className="hoverImgBox">                
                    <div className="imgWrap">
                      <img src={abtImg2} alt="Ghazal Kay Rang event" />
                    </div>                
                </div>
                <div className="hoverImgBox">              
                    <div className="imgWrap">
                      <img src={abtImg3} alt="Folk music program" />
                    </div>              
                </div>
              </CustomSlider>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* meeesge section */}
      <section className="messSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="about-main-mess-box">
                <div className="about-main-mess-wrap">
                  <div className="row ">
                    <div className="about-mess-head">
                      <h2 className="globalHeading two">
                        Founding Director's Message
                      </h2>
                      <h3>Yosuf Kerai</h3>
                    </div>
                  </div>
                  <div className="row justify-content-center ">
                    <div className="col-md-8">
                      <div className="about-mess-mini">
                      <div className="mess-semi-colon-1 colons">
                          <img
                            src={abtImg6}
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="mess-semi-colon-2 colons">
                          <img
                            src={abtimg5}
                            alt="image"
                            className="img-fluid"
                          />
                        </div>
                        <p>
                          “The vast and complex repertoire of techniques and
                          modes that constitute both the melodic and rhythmic
                          universes of South Asian music render this art form as
                          one of the greatest achievements of this region. It
                          makes for not only an extremely robust and rich
                          musical inheritance for the people of South Asia, but
                          its evolution embodies the trends of modernization
                          colonial South Asia experienced. However, the systemic
                          erasure of South Asian musical heritage in Pakistan
                          has pronounced the need for institutional recognition
                          and facilitation of students to engage with this music
                          that is integral to South Asian aesthetics and
                          identity.”
                        </p>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="about-keraiPic">
                  <img src={abtImg4} alt="image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
