import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// import "../assets/css/stylesheet.css";

// Import images
import eventImg1 from "../assets/images/events/event-card-1.webp";
import eventImg2 from "../assets/images/events/event-card-2.webp";
import eventImg3 from "../assets/images/events/event-card-3.webp";

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events - Center for South Asian Music</title>
      </Helmet>

      <span className='innerPageBlock'></span>
      <section className="eventsSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading two">Events</h2>
              </div>
            </div>
          </div>
          <ul className="gridviewBox">
            <Link to={'/events-inner'}>
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={eventImg1} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Andaaz: The Dance concert</h3>
                  <h4>Dated: 30/Nov/2018</h4>
                </div>
              </div>
            </div>
            </Link>
            <Link>
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={eventImg2} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Drum Circle: Welcoming Sprig</h3>
                  <h4>Dated: 17/Jun/2019</h4>
                </div>
              </div>
            </div>
            </Link>
            <Link>
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={eventImg3} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Raag Time</h3>
                  <h4>5/Mar/2019</h4>
                </div>
              </div>
            </div>
            </Link>
            <Link>
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={eventImg3} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Raag Time</h3>
                  <h4>5/Mar/2019</h4>
                </div>
              </div>
            </div>
            </Link>
            <Link>
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={eventImg1} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Andaaz: The Dance concert</h3>
                  <h4>Dated: 30/Nov/2018</h4>
                </div>
              </div>
            </div>
            </Link>
            <Link>
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={eventImg2} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Drum Circle: Welcoming Sprig</h3>
                  <h4>Dated: 17/Jun/2019</h4>
                </div>
              </div>
            </div>
            </Link>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Events;
