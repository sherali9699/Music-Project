import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/20_Khayal - Imagination in Sound/1000x1000/IMG_0043.jpg";
import im2 from "../assets/images/event-assets/20_Khayal - Imagination in Sound/1000x1000/IMG_0063.jpg";
import im3 from "../assets/images/event-assets/20_Khayal - Imagination in Sound/1000x1000/IMG_0085.jpg";
import im4 from "../assets/images/event-assets/20_Khayal - Imagination in Sound/1000x1000/IMG_0095.jpg";
import im5 from "../assets/images/event-assets/20_Khayal - Imagination in Sound/1000x1000/IMG_0302.jpg";


function Ev20() {
  return (
    <>
      <Helmet>
        <title>
        Khayal: Imagination in Sound
        </title>
        <link rel="canonical" href="https://habib.edu.pk/music/events/khayal-imagination-in-sound-16-feb-2023" />
      </Helmet>

      {/* Header */}
      <div
        className="event-inner-header"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">
                Khayal: Imagination in Sound - Center for South Asian Music
                </h1>
                <span className="dateonBanner">Dated: 16/Feb/2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="mrSec padSec top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="bannerInnerDetais">
                <p>
                The Center and the Comparative Humanities program hosted its 5th in the Khayal concert series featuring California-based Hindustani musical virtuosos Raaginder Singh Momi on violin and Jim Santi Owen on tabla.  
                </p>
              </div>
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                <div className="gallery-container">
                  <a data-fancybox="gallery" href={im1}>
                    <img src={im1} width="" height="" alt="Event 1" />
                  </a>
                  <a data-fancybox="gallery" href={im2}>
                    <img src={im2} width="" height="" alt="Event 1" />
                  </a>
                  <a data-fancybox="gallery" href={im3}>
                    <img src={im3} width="" height="" alt="Event 1" />
                  </a>
                  <a data-fancybox="gallery" href={im4}>
                    <img src={im4} width="" height="" alt="Event 1" />
                  </a>
                  <a data-fancybox="gallery" href={im5}>
                    <img src={im5} width="" height="" alt="Event 1" />
                  </a>
                </div>
              </Fancybox>
            </div>
            <div className="eve-button-conatin mt-1" >
                <Link to={"/events"}>
                  <span className="globalBtn borderBtn">Back</span>
                  </Link>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ev20;
