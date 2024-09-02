import React from "react";
import { Helmet } from "react-helmet";

//style sheets
// import '../assets/css/stylesheet.css'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/dev-music/contact" />
      </Helmet>

      <span className='innerPageBlock'></span>
      <section className="AcaOffSec padSec top">
        <div className="container">
          <div className="contact-page">
            <h1 className="globalHeading contactpage">Reach Out to Us</h1>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-common ">
                  <h2>Center for South Asian Music</h2>

                  <a href="mailto:music@habib.edu.pk">music@habib.edu.pk</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-common">
                  <h2>Yousuf Kerai - Founding Director</h2>

                  <a href="mailto:Yousuf.kerai@sse.habib.edu.pk">
                    Yousuf.kerai@sse.habib.edu.pk
                  </a>

                  <a href="tel:+9221111042424">021 111 042 424 (Ext: 5239)</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-common">
                  <h2>Chandu Lal - Music Room Manager</h2>

                  <a href="mailto:Chandu.lal@habib.edu.pk">
                    Chandu.lal@habib.edu.pk
                  </a>

                  <a href="tel:+9221111042424">021 111 042 424 (Ext: 4595)</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-common ">
                  <h2>Syed Muhammad Kumail Ali Jaffry - Coordinator</h2>

                  <a href="mailto:kumail.jaffry@habib.edu.pk">
                    kumail.jaffry@habib.edu.pk
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="contact-common">
                  <h2>Marya Darukhanawalla - Student Coordinator</h2>

                  <a href="mailto:md07585@st.habib.edu.pk">
                    md07585@st.habib.edu.pk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
