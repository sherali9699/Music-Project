import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/01/IMG_7113.jpg";
import im2 from "../assets/images/event-assets/01/IMG_7125.jpg";
import im3 from "../assets/images/event-assets/01/IMG_7158.jpg";
import im4 from "../assets/images/event-assets/01/IMG_7190.jpg";
import im5 from "../assets/images/event-assets/01/IMG_7194.jpg";

function Ev1() {
  return (
    <>
      <Helmet>
        <title>Andaaz: The Dance Concert - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/events/andaaz-the-dance-concert-30-nov-2018" />
      </Helmet>

      {/* Header */}
      <div className="event-inner-header"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Andaaz: The Dance Concert</h1>
                <span className="dateonBanner">Dated: 30/Nov/2018</span>
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
                  Weaving together strands of classical art forms of the region,
                  Andaaz concert was a spellbinding display of Magical Khatak,
                  featuring Farah Yaisn Shaikh, a renowned performer,
                  choreographer, instructor and Founder/Director for Noorani
                  Dance, known for her evocative storytelling, technical
                  precision, delicacy and grace. Accompanied by Shehroze
                  Hussain, the prodigious son and disciple of Ustaad Sajid
                  Hussain, and Yosuf Kerai, Habib University's
                  in-house-tabla-nawaz, a memorable performance was delivered.
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

export default Ev1;
