import React from "react";
import { Helmet } from "react-helmet";

//style sheets
// import '../assets/css/stylesheet.css'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Center for South Asian Music</title>
      </Helmet>

      <section className="AcaOffSec contact padSec">
        <div className="container">
          <div className="contact-page">
            <h2 className="globalHeading">Reach Out to Us</h2>
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-10">
                <div className="contact-common ">
                  <h3>Center for South Asian Music</h3>

                  <a href="mailto:music@habib.edu.pk">music@habib.edu.pk</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-10">
                <div className="contact-common">
                  <h3>Yosuf Kerai - Founding Director</h3>

                  <a href="mailto:Yosuf.kerai@sse.habib.edu.pk">
                    Yosuf.kerai@sse.habib.edu.pk
                  </a>

                  <a href="tel:+9221111042424">021 111 042 424 (Ext: 5239)</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-10">
                <div className="contact-common">
                  <h3>Chandu Lal - Music Room Manager</h3>

                  <a href="mailto:Chandu.lal@habib.edu.pk">
                    Chandu.lal@habib.edu.pk
                  </a>

                  <a href="tel:+9221111042424">021 111 042 424 (Ext: 4595)</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-10">
                <div className="contact-common ">
                  <h3>Syed Muhammad Kumail Ali Jaffry - Coordinator</h3>

                  <a href="mailto:kumail.jaffry@habib.edu.pk">
                    kumail.jaffry@habib.edu.pk
                  </a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-10">
                <div className="contact-common">
                  <h3>Marya DurkhanWalla - Student Coordinator</h3>

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
