import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/13_The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid/1000x1000/DSC09442.jpg";
import im2 from "../assets/images/event-assets/13_The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid/1000x1000/DSC09444.jpg";
import im3 from "../assets/images/event-assets/13_The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid/1000x1000/DSC09446.jpg";
import im4 from "../assets/images/event-assets/13_The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid/1000x1000/DSC09450.jpg";
import im5 from "../assets/images/event-assets/13_The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid/1000x1000/DSC09453.jpg";






function Ev13() {
  return (
    <>
      <Helmet>
        <title>The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid - Center for South Asian Music</title>
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid</h1>
                <span className="dateonBanner">Dated: 09/June/2022</span>
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
                The Center hosted a talk by Dr. Abdullah Khalid, a former faculty member in the Integrated Sciences and Mathematics program at Habib University, delving into intriguing research on the acoustics of tabla and the scientific principles guiding its construction.
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

export default Ev13;
