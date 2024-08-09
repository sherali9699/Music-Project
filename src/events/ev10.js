import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/10_Khayal - Imagination in Sound/1000x1000/IMG_7171.jpg";
import im2 from "../assets/images/event-assets/10_Khayal - Imagination in Sound/1000x1000/IMG_7189.jpg";
import im3 from "../assets/images/event-assets/10_Khayal - Imagination in Sound/1000x1000/IMG_7191.jpg";
import im4 from "../assets/images/event-assets/10_Khayal - Imagination in Sound/1000x1000/IMG_7207.jpg";
import im5 from "../assets/images/event-assets/10_Khayal - Imagination in Sound/1000x1000/IMG_7218.jpg";






function Ev10() {
  return (
    <>
      <Helmet>
        <title>Khayal: Imagination in Sound  - Center for South Asian Music</title>
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading"> Khayal: Imagination in Sound </h1>
                <span className="dateonBanner">Dated:17/Mar/2022</span>
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
                The Center hosted its 4th in the Khayal concert series featuring the late Ustad Sajid Hussain, a renowned sitar nawaz of Pakistan and former Music Instructor at the Khawaja Mashooqullah Music Room, in the H.M. Habib Auditorium, accompanied by Yousuf Kerai on tabla.
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
                    <img src={im2} width="" height="" alt="Event 2" />
                  </a>
                  <a data-fancybox="gallery" href={im3}>
                    <img src={im3} width="" height="" alt="Event 3" />
                  </a>
                  <a data-fancybox="gallery" href={im4}>
                    <img src={im4} width="" height="" alt="Event 4" />
                  </a>
                  <a data-fancybox="gallery" href={im5}>
                    <img src={im5} width="" height="" alt="Event 5" />
                  </a>
                </div>
              </Fancybox>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ev10;
