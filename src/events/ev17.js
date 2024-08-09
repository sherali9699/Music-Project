import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/17_Khursheed-e-Fann/1000x1000/IMG_6828.jpg";
import im2 from "../assets/images/event-assets/17_Khursheed-e-Fann/1000x1000/IMG_6853.jpg";
import im3 from "../assets/images/event-assets/17_Khursheed-e-Fann/1000x1000/IMG_6899.jpg";
import im4 from "../assets/images/event-assets/17_Khursheed-e-Fann/1000x1000/IMG_6976.jpg";
import im5 from "../assets/images/event-assets/17_Khursheed-e-Fann/1000x1000/IMG_6987.jpg";
import im6 from "../assets/images/event-assets/17_Khursheed-e-Fann/1000x1000/IMG_7008.jpg";
import im7 from "../assets/images/event-assets/17_Khursheed-e-Fann/1000x1000/IMG_7034.jpg";


function Ev17() {
  return (
    <>
      <Helmet>
        <title>
        Khursheed-e-Fann - Center for South Asian Music
        </title>
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
                Khursheed-e-Fann
                </h1>
                <span className="dateonBanner">Dated: 11/Nov/2022</span>
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
                The Center held a concert on November 11, 2022, in tribute to the late tabla maestro, Ustad Khursheed Hussain, who dedicated his final years to fostering a culture of refinement, respect, and musical artistry at Habib University. With a distinguished career, he was honored with the President's Pride of Performance Award in 2020. This event commemorated his contributions with performances by his students, rare video footage, and testimonials and performances from artists who were influenced by his profound impact on their music and the musical landscape of Pakistan.
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
                  <a data-fancybox="gallery" href={im7}>
                    <img src={im7} width="" height="" alt="Event 1" />
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

export default Ev17;
