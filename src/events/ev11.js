import React from "react";
import { Helmet } from "react-helmet";

// Component
import Fancybox from "../components/FancyBox";

// Images
import banner from "../assets/images/inner-event/inner-event-banner.webp";
import im1 from "../assets/images/event-assets/11_Nazaakat aur Taakat/1000x1000/Edit-12.jpg";
import im2 from "../assets/images/event-assets/11_Nazaakat aur Taakat/1000x1000/Edit-2.jpg";
import im3 from "../assets/images/event-assets/11_Nazaakat aur Taakat/1000x1000/Edit-23.jpg";
import im4 from "../assets/images/event-assets/11_Nazaakat aur Taakat/1000x1000/Edit-3.jpg";
import im5 from "../assets/images/event-assets/11_Nazaakat aur Taakat/1000x1000/Edit-5.jpg";
import im6 from "../assets/images/event-assets/11_Nazaakat aur Taakat/1000x1000/Edit-6.jpg";






function Ev11() {
  return (
    <>
      <Helmet>
        <title>Nazaakat aur Taakat - Center for South Asian Music</title>
      </Helmet>

      {/* Header */}
      <div className="event-inner-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-10">
              <div className="bannerHead">
                <h1 className="globalHeading">Nazaakat aur Taakat</h1>
                <span className="dateonBanner">Dated: 25/Mar/2022</span>
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
                As the culmination of the 5th Post-Colonial Higher Education conference at Habib University, the Centre for South Asian Music presented "Nazaakat aur Taakat". Featuring the captivating Kathak dancer Farah Yasmeen Shaikh from California alongside exceptional musicians like Mohammad Aizaz Sohail, Yousuf Kerai, Shehroze Hussain, and Islamuddin Mir, this performance beautifully combined power and grace through the narrative dance form of Kathak.
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
                </div>
              </Fancybox>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ev11;
