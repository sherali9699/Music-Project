import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/23_Ghazal Kay Rang/1000x1000/DSC04343.jpg";
import im2 from "../assets/images/event-assets/23_Ghazal Kay Rang/1000x1000/DSC04357.jpg";
import im3 from "../assets/images/event-assets/23_Ghazal Kay Rang/1000x1000/DSC04358.jpg";
import im4 from "../assets/images/event-assets/23_Ghazal Kay Rang/1000x1000/DSC04365.jpg";
import im5 from "../assets/images/event-assets/23_Ghazal Kay Rang/1000x1000/DSC04365.jpg";
import im6 from "../assets/images/event-assets/23_Ghazal Kay Rang/1000x1000/DSC04368.jpg";
import im7 from "../assets/images/event-assets/23_Ghazal Kay Rang/1000x1000/DSC04511.jpg";

function Ev23() {
  return (
    <>
      <Helmet>
        <title>
        Ghazal Kay Rang - Center for South Asian Music 
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
                Ghazal Kay Rang
                </h1>
                <span className="dateonBanner">Dated: 09/Mar/2023</span>
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
                The Centre for South Asian Music, in collaboration with the Comparative Humanities program hosted its 2nd in the Ghazal Kay Rang series featuring renowned singer, Karam Abbas Khan, for new compositions and renditions of ghazals by known and new poets. He was accompanied on Tabla by Yousuf Kerai, on harmonium by Islammudin Mir, violin instructor in the Khawaja Mashooqullah Music Room.   
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
                  </a>                  <a data-fancybox="gallery" href={im5}>
                    <img src={im5} width="" height="" alt="Event 1" />
                  </a>                  <a data-fancybox="gallery" href={im6}>
                    <img src={im6} width="" height="" alt="Event 1" />
                  </a>                  <a data-fancybox="gallery" href={im7}>
                    <img src={im7} width="" height="" alt="Event 1" />
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

export default Ev23;
