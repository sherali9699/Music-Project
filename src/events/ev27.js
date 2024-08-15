import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/27_Campus Visit - Ustad Shafqat Ali Khan/1000x1000/DSC_0055.jpg";
import im2 from "../assets/images/event-assets/27_Campus Visit - Ustad Shafqat Ali Khan/1000x1000/DSC_0088.jpg";
import im3 from "../assets/images/event-assets/27_Campus Visit - Ustad Shafqat Ali Khan/1000x1000/DSC_0097.jpg";
import im4 from "../assets/images/event-assets/27_Campus Visit - Ustad Shafqat Ali Khan/1000x1000/IMG_9867.jpg";
import im5 from "../assets/images/event-assets/27_Campus Visit - Ustad Shafqat Ali Khan/1000x1000/IMG_9872.jpg";


function Ev27() {
  return (
    <>
      <Helmet>
        <title>
        Campus Visit | Ustad Shafqat Ali Khan - Center for South Asian Music 
        </title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/events/campus-visit-ustad-shafqat-ali-khan-27-nov-2023" />
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
                Campus Visit | Ustad Shafqat Ali Khan
                </h1>
                <span className="dateonBanner">Dated: 27/Nov/2023</span>
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
                The center hosted a campus visit for Ustad Shafqat Ali Khan, son of the legendary Ustad Salamat Ali Khan and torchbearer of the Sham Chaurasi Gharana of vocal music, along with his sons Faizan and Nadir Ali Khan. During the conversation, he highlighted some distinctive features of their gharana's gayeki and discussed innovations he and his sons are introducing to the South Asian vocal repertoire.
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

export default Ev27;
