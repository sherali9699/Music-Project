import React from 'react';
import { Helmet } from 'react-helmet';

//css
// import "../assets/css/stylesheet.css";

//image
import img from '../assets/images/instructors/islamuddin.webp';

function Islam() {
  return (
    <>
      <Helmet>
        <title>Islamuddin Mir - Center for South Asian Music</title>
      </Helmet>   

    <span className='innerPageBlock'></span>
    <section className="AcaOffSec padSec">
      <div className="container instructors">
        <div className="d-flex justify-content-center">
          <div className="instructor-head">
            <h1 className="globalHeading">Islamuddin Meer</h1>
            <h3>(Violin Instructor)</h3>
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
            <p>His initial instruction in music came from his brother-in-law, Ustad Nathu Khan, from whom he learned to play the harmonium. His knowledge of classical music was broadened by his father, Ustad Noor Khan, an established sarangi player for Radio Pakistan Karachi. Alongside, he was taught the violin by his elder brother, Abdul Shakoor. From 1969 to 1979, Islamuddin Meer served as a violinist for Radio Pakistan Karachi and for the Pakistani film industry. He subsequently had the opportunity to perform abroad as a violinist and ghazal singer. For 24 years he travelled back and forth, and during this time, maintained his position as composer for the audio company, Sonic. Since 2004 he has been in Pakistan, performing for television. In his extensive musical career, he has worked with prestigious musicians such as Nazar Hussain, Ustad Umrao Bundo Khan, Ustad Hamid Hussain, Ustad Kabir Khan, and Ustad Ghulam Mohiuddin Khan.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Islam;
