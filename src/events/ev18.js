import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/18_Baithak with Ustad Badar uz Zaman/1000x1000/DSC01423.jpg";
import im2 from "../assets/images/event-assets/18_Baithak with Ustad Badar uz Zaman/1000x1000/DSC01428.jpg";
import im3 from "../assets/images/event-assets/18_Baithak with Ustad Badar uz Zaman/1000x1000/DSC01438.jpg";
import im4 from "../assets/images/event-assets/18_Baithak with Ustad Badar uz Zaman/1000x1000/IMG_8538.jpg";
import im5 from "../assets/images/event-assets/18_Baithak with Ustad Badar uz Zaman/1000x1000/IMG_8595.jpg";


function Ev18() {
  return (
    <>
      <Helmet>
        <title>
        Baithak with Ustad Badar uz Zaman - Center for South Asian Music
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
                Baithak with Ustad Badar uz Zaman
                </h1>
                <span className="dateonBanner">Dated: 28/Nov/2022a </span>
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
                The Center hosted a baithak featuring Ustad Badar uz Zaman, a prominent vocalist and musicologist from Lahore, in the Khawaja Mashooqullah Music Room.
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

export default Ev18;
