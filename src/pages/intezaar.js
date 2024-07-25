import React from 'react';
import { Helmet } from 'react-helmet';


//css
import "../assets/css/stylesheet.css";

//image
import img from '../assets/images/instructors/intzaar.webp';

function Intizaar() {
  return (
    <>
          <Helmet>
        <title>Intezar Hussain - Center for South Asian Music</title>
      </Helmet>
    <span className='innerPageBlock'></span>
    <section className="AcaOffSec padSec">
      <div className="container instructors">
        <div className="d-flex justify-content-center">
          <div className="instructor-head">
            <h1 className="globalHeading">Intezar Hussain</h1>
            <h3>(Vocal instructor)</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="instructor-pic">
            <img src={img} alt="Intizaar" class="image-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-9 mx-auto">
            <div className="instructor-intro">
              <p>
                Intezar Hussain was born in 1980 to a musical family; his
                father, Master Mohd. Shafi, a composer and violinist and his
                uncle, Qamar Allah Ditta, a master guitar player. Intezar's
                formal training as a vocalist began at the age of 12 under the
                tutelage of Ustad Iliyas Hussain Khan of the Patiala Gharana.
                After this he became a student of the great maestro Ustad
                Salamat Ali Khan of the Sham Chaurasi Gharana. Intezar has
                performed in both private and public forums such as the
                All-Pakistan Music Conference and Sampurna. He is well known for
                his ghazal and thumri renditions on tv and radio. Currently he
                is a faculty member at the Arts Council of Pakistan and was
                previously a faculty member at the National Academy of
                Performing Arts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Intizaar;
