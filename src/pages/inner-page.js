import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// CSS
// import "../assets/css/stylesheet.css";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/inner-event/inner-event-1.webp";
import im2 from "../assets/images/inner-event/inner-event-2.webp";
import im3 from "../assets/images/inner-event/inner-event-3.webp";
import im4 from "../assets/images/inner-event/inner-event-4.webp";
import im5 from "../assets/images/inner-event/inner-event-5.webp";
import im6 from "../assets/images/inner-event/inner-event-6.webp";

function Events_Inner() {
  return (
    <>
      <Helmet>
        <title> - Center for South Asian Music</title>
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Andaaz: The Dance Concert</h1>
                <span className="dateonBanner">Dated: 30/Jun/2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="mrSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="bannerInnerDetais">
                <p>
                  Weaving together strands of classical art forms of the region,
                  Andaaz concert was a spellbinding display of Magical Khatak,
                  featuring Farah Yaisn Shaikh, a renowned performer,
                  choreographer, instructor and Founder/Director for Noorani
                  Dance, known for her evocative storytelling, technical
                  precision, delicacy and grace. Accompanied by Shehroze Hussain,
                  the prodigious son and disciple of Ustaad Sajid Hussain, and
                  Yosuf Kerai, Habib University's in-house-tabla-nawaz, a
                  memorable performance was delivered.
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
                  <a data-fancybox="gallery" href={im6}>
                    <img src={im6} width="" height="" alt="Event 6" />
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

export default Events_Inner;
