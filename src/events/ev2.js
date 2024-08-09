import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/02/1000x1000/IMG_9910.jpg";
import im2 from "../assets/images/event-assets/02/1000x1000/IMG_9933.jpg";
import im3 from "../assets/images/event-assets/02/1000x1000/IMG_9952.jpg";
import im4 from "../assets/images/event-assets/02/1000x1000/IMG_9954.jpg";
import im5 from "../assets/images/event-assets/02/1000x1000/IMG_9955.jpg";
import im6 from "../assets/images/event-assets/02/1000x1000/IMG_9961.jpg";
import im7 from "../assets/images/event-assets/02/1000x1000/IMG_9970.jpg";




function Ev2() {
  return (
    <>
      <Helmet>
        <title>Drum Circle: Welcoming Spring - Center for South Asian Music</title>
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Drum Circle: Welcoming Spring</h1>
                <span className="dateonBanner">Dated: 30/Jun/2020</span>
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
                Students and faculty at HU combined their musical talents to craft classical eastern and fusion tunes to welcome Spring at the serene Zen Garden. Utilizing the lush, green space that was created to inculcate 'green thinking' and engendering a sense of responsibility towards the environment among the HU community, the event also marked the inaugural performance of the students of Khawaja Munir Mashooqullah Music Room.
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
                    <img src={im6} width="" height="" alt="Event 5" />
                  </a> 
                 <a data-fancybox="gallery" href={im7}>
                    <img src={im7} width="" height="" alt="Event 5" />
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

export default Ev2;
