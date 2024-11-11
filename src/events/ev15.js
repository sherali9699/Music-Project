import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/15_Musicking through Makran with Ustad Noor Baksh/1000x1000/DSC00845.jpg";
import im2 from "../assets/images/event-assets/15_Musicking through Makran with Ustad Noor Baksh/1000x1000/DSC00877.jpg";
import im3 from "../assets/images/event-assets/15_Musicking through Makran with Ustad Noor Baksh/1000x1000/DSC00899.jpg";
import im4 from "../assets/images/event-assets/15_Musicking through Makran with Ustad Noor Baksh/1000x1000/DSC00938.jpg";
import im5 from "../assets/images/event-assets/15_Musicking through Makran with Ustad Noor Baksh/1000x1000/DSC00956.jpg";
import im6 from "../assets/images/event-assets/15_Musicking through Makran with Ustad Noor Baksh/1000x1000/IMG_0281.jpg";

function Ev15() {
  return (
    <>
      <Helmet>
        <title>
          Musicking through Makran with Ustad Noor Baksh - Center for South
          Asian Music
        </title>
        <link rel="canonical" href="https://habib.edu.pk/music/events/musicking-through-makran-with-ustad-noor-baksh-30-sept-2022" />
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
                  Musicking through Makran with Ustad Noor Baksh
                </h1>
                <span className="dateonBanner">Dated: 30/Sept/2022</span>
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
                  The Center for South Asian and the Comparative Humanities
                  Program featured Balochi Benju maestro Ustad Noor Baksh. He is
                  one of the few players of this instrument in South Asia.
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
                  <a data-fancybox="gallery" href={im6}>
                    <img src={im6} width="" height="" alt="Event 1" />
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

export default Ev15;
