import React from 'react';
import { Helmet } from 'react-helmet';

//css
// import "../assets/css/stylesheet.css";

//image
import img from '../assets/images/instructors/sajjid.webp';

function Sajid() {
  return (
    <>
          <Helmet>
        <title>Ustad Sajid Hussain - Center for South Asian Music</title>
      </Helmet>
    <span className='innerPageBlock'></span>
    <section className="AcaOffSec padSec">
      <div className="container instructors">
        <div className="d-flex justify-content-center">
          <div className="instructor-head">
            <h1 className="globalHeading">Ustad Sajid Hussain</h1>
            <h3>(Sitar Instructor)</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="instructor-pic">
            <img src={img} alt="Intizaar" class="image-fluid" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="instructor-intro">
            <p>Hailing from a family of musical virtuosos, Sajid Hussain, is the disciple of his father, Ustad Fida Hussain, and his uncle, Ustad Kabir Khan. Belonging to the Senia Gharana that traces its roots to Mian Tansen, Sajid Hussain began to play the sitar at the age of 16. He has performed for radio, television and music festivals such as the All-Pakistan Music Conference. Sajid Hussain is one of the senior artistes and composers in the new ensemble, Tarz Group which comprises of classically trained musicians who present South Asian musical heritage in a new orchestral style. In addition to performances, Sajid Hussain has focused his attention on educating his children in the art that is his ancestral inheritance. He is one of the few remaining sitar maestros of Pakistan and his artistry lies not only in his playing but also in his magnificent compositions.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Sajid;
