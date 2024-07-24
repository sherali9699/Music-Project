import React from "react";

//css
import '..//assets/css/stylesheet.css'
 
//images
import banner from '..//assets/images/inner-event/inner-event-banner.webp'
import im1 from '..//assets/images/inner-event/inner-event-1.webp'
import im2 from '..//assets/images/inner-event/inner-event-2.webp'
import im3 from '..//assets/images/inner-event/inner-event-3.webp'
import im4 from '..//assets/images/inner-event/inner-event-4.webp'
import im5 from '..//assets/images/inner-event/inner-event-5.webp'
import im6 from '..//assets/images/inner-event/inner-event-6.webp'


function Events_Inner() {
  return (
    <>
      {/* header */}
      <div className="event-inner-header">
        <div className="event-inner-head-pic">
          <img src={banner} alt="image" className="event-inner-head-pic" />
        </div>
        <div className="container event-inner-header-content">
          <span> Andaaz: The Dance Concert </span>
          <span><p>Dated: 30/Jun/2020</p></span>
        </div>
      </div>

      {/* main sec */}

      <section className="mrSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
                <p>
                Weaving togather strands of classical art forms of the region, Andaaz concert was a spelbinding display of Magical Khatak, featuring Farah Yaisn Shaikh, a renowned performer, choreographer, instructor and Founder/Director for Noorani Dance, known for her evocative story telling, technical precision, delicacy and grace. Accompained by Shehroze Hussain, the prodigious son and deciple of Ustaad Sajid Hussain, and Yosuf Kerai, Habib University's in-huose-tabla-nawaz, a memorable performance was delivered.
                </p>
            </div>
          </div>
          <ul className="abtImagesWrap">
            <li>
              <img src={im1} alt="Music Room interior" />
            </li>
            <li>
              <img src={im2} alt="Music Room instruments" />
            </li>
            <li>
              <img src={im3} alt="Music Room practice session" />
            </li>
          </ul>
          <ul className="abtImagesWrap">
            <li>
              <img src={im4} alt="Music Room interior" />
            </li>
            <li>
              <img src={im5} alt="Music Room instruments" />
            </li>
            <li>
              <img src={im6} alt="Music Room practice session" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Events_Inner;