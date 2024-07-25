import React from "react";
import { Helmet } from "react-helmet";

//component
import Fancybox from "../components/FancyBox";

//css
import "..//assets/css/stylesheet.css";

//images
import banner from "..//assets/images/inner-event/inner-event-banner.webp";
import im1 from "..//assets/images/inner-event/inner-event-1.webp";
import im2 from "..//assets/images/inner-event/inner-event-2.webp";
import im3 from "..//assets/images/inner-event/inner-event-3.webp";
import im4 from "..//assets/images/inner-event/inner-event-4.webp";
import im5 from "..//assets/images/inner-event/inner-event-5.webp";
import im6 from "..//assets/images/inner-event/inner-event-6.webp";

function Events_Inner() {
  return (
    <>
      <Helmet>
        <title> - Center for South Asian Music</title>
      </Helmet>

      {/* header */}
      <div className="event-inner-header">
        <div className="event-inner-head-pic">
          <img src={banner} alt="image" className="event-inner-head-pic" />
        </div>
        <div className="container event-inner-header-content">
          <span> Andaaz: The Dance Concert </span>
          <span>
            <p>Dated: 30/Jun/2020</p>
          </span>
        </div>
      </div>

      {/* main sec */}

      <section className="mrSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p>
                Weaving togather strands of classical art forms of the region,
                Andaaz concert was a spelbinding display of Magical Khatak,
                featuring Farah Yaisn Shaikh, a renowned performer,
                choreographer, instructor and Founder/Director for Noorani
                Dance, known for her evocative story telling, technical
                precision, delicacy and grace. Accompained by Shehroze Hussain,
                the prodigious son and deciple of Ustaad Sajid Hussain, and
                Yosuf Kerai, Habib University's in-huose-tabla-nawaz, a
                memorable performance was delivered.
              </p>
            </div>
          </div>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <div className="gallery-container">
            <a
              data-fancybox="gallery"
              href={im1}
            >
              <img
                src={im1}
                width="350"
                height="150"
              />
            </a>
            <a
              data-fancybox="gallery"
              href={im2}
            >
              <img
                src={im2}
                width="350"
                height="150"
              />
            </a>
            <a
              data-fancybox="gallery"
              href={im3}
            >
              <img
                src={im3}
                width="350"
                height="150"
              />
            </a>
            <a
              data-fancybox="gallery"
              href={im4}
            >
              <img
                src={im4}
                width="350"
                height="350"
              />
            </a>
            <a
              data-fancybox="gallery"
              href={im5}
            >
              <img
                src={im5}
                width="350"
                height="150"
              />
            </a>
            <a
              data-fancybox="gallery"
              href={im6}
            >
              <img
                src={im6}
                width="350"
                height="150"
              />
            </a>
            </div>
          </Fancybox>
        </div>
      </section>
    </>
  );
}

export default Events_Inner;
