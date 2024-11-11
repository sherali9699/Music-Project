import React from 'react';
import { Helmet } from 'react-helmet';

//css
// import "../assets/css/stylesheet.css";

//image
import img from '../assets/images/instructors//zohaib.webp';

function Zohaib() {
  return (
    <>
      <Helmet>
        <title>Zohaib Khursheed Hussain - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/music/music-room/zohaib-khursheed-hussain-tabla-instructor" />
      </Helmet>

    <span className='innerPageBlock'></span>
    <section className="AcaOffSec padSec top">
      <div className="container instructors">
        <div className="d-flex justify-content-center">
          <div className="instructor-head">
            <h1 className="globalHeading">Zohaib Hussain</h1>
            <h2>(Tabla Instructor)</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="instructor-pic">
          <img src={img} className="image-fluid" alt="Zohaib Hussain | Tabla Instructor" width="389" height="389" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="instructor-intro">
            <p>Zohaib Hussain is the son of (late) Ustad Khursheed Hussain and is the inheritor of the musical heritage in his father's bloodline. He started learning tabla at a very early age and before he knew it, by the age of 16, he was training for classical tabla repertoire. Assisted by his father's senior most disciples, Yousuf Kerai, Zohaib has performed live for the ensemble, Tarz Group, and for the All-Pakistan Music Conference. His playing carries not only the flavors of his father's techniques but also employs rhythmic nuances from other tabla players that inspire him.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Zohaib;
