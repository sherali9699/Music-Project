import React from 'react';

//style sheets
import '../assets/css/stylesheet.css'



const Contact = () => {
  return (
    <>
      <section className='AcaOffSec padSec'>
        <div className="container contact-page">
          <h2 className='globalHeading'>Reach Out to Us</h2>
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="contact-common ">
                <h3>Center for South Asian Music</h3>
                <p>
                  <a href="mailto:music@habib.edu.pk">music@habib.edu.pk</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="contact-common">
                <h3>Yosuf Kerai - Founding Director</h3>
                <p>
                  <a href="mailto:Yosuf.kerai@sse.habib.edu.pk">Yosuf.kerai@sse.habib.edu.pk</a>
                </p>
                <p>
                  <a href="tel:+9221111042424">021 111 042 424 (Ext: 5239)</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="contact-common">
                <h3>Chandu Lal - Music Room Manager</h3>
                <p>
                  <a href="mailto:Chandu.lal@habib.edu.pk">Chandu.lal@habib.edu.pk</a>
                </p>
                <p>
                  <a href="tel:+9221111042424">021 111 042 424 (Ext: 4595)</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="contact-common ">
                <h3>Syed Muhammad Kumail Ali Jaffry - Coordinator</h3>
                <p>
                  <a href="mailto:kumail.jaffry@habib.edu.pk">kumail.jaffry@habib.edu.pk</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9 mx-auto">
              <div className="contact-common">
                <h3>Marya DurkhanWalla - Student Coordinator</h3>
                <p>
                  <a href="mailto:md07585@st.habib.edu.pk">md07585@st.habib.edu.pk</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
