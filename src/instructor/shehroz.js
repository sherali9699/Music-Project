import React from 'react';
import { Helmet } from 'react-helmet';

//css
// import "../assets/css/stylesheet.css";

//image
import img from '../assets/images/instructors/shehroz.webp';

function Shehroz() {
  return (
    <>
          <Helmet>
        <title>Shehroze Hussain - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/music-room/shehroze-hussain-sitar-instructor" />
      </Helmet>
    <span className='innerPageBlock'></span>
    <section className="AcaOffSec padSec top">
      <div className="container instructors">
        <div className="d-flex justify-content-center">
          <div className="instructor-head">
            <h1 className="globalHeading">Shehroz Hussain</h1>
            <h2>(Sitar Instructor)</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="instructor-pic">
          <img src={img} className="image-fluid" alt="Shehroze Hussain | Sitar Instructor" width="389" height="389" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="instructor-intro">
            <p>A student of his father, the late sitar maestro Ustad Sajid Hussain, Shehroze has received a musical education steeped in the South Asian classical tradition. With unmatched musical mastery on the sitar and similar agility with his vocals, Shehroze has made a name for himself in the musical landscape of Karachi and Lahore in his teenage years. He has performed in every prestigious music conference and festival, namely All Pakistan Music Conference, Lahore Music Forum and Tehzeeb Foundation and he has been a vital performer since the inception of Tarz Group, an ensemble of classically trained musicians that are trying to rethink and reshape the way South Asian music is performed. With the ensemble, Shehroze has experimented with fusion music, juxtaposing genres with that of the South Asian aesthetic, and has also composed music to suit the <br/> new performance style. Alongside, he has also accompanied in lecture demos and courses on the music of South Asia at the Aga Khan University FAS/HASS first-year program for medical students, at T2F and at the Faiz International Festivals. Habib University is fortunate to have Shehroze continue his father's legacy as a great teacher and musician.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Shehroz;
