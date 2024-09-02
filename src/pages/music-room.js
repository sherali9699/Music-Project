import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import "../assets/css/stylesheet.css";

//importing images
import m1 from "..//assets/images/music-room/m1.webp";
import m2 from "..//assets/images/music-room/m2.webp";
import m3 from "..//assets/images/music-room/Intezar-hussain.webp";
import m4 from "..//assets/images/music-room/Islamuddin.webp";
import m5 from "..//assets/images/music-room/Shehroze-Hussain.webp";
import m6 from "..//assets/images/music-room/Zohaib-Hussain.webp";
import m7 from "..//assets/images/music-room/Late- profile01.webp";
import m8 from "..//assets/images/music-room/Late- profile02.webp";

const MusicRoom = () => {
  return (
    <>
      <Helmet>
        <title>MUSIC ROOM - Center for South Asian Music</title>
        <link
          rel="canonical"
          href="https://habib.edu.pk/dev-music/music-room"
        />
        <meta
          name="description"
          content="Comprising dedicated rooms for Sitar, Violin, Tabla and Vocal lessons, the Music Room hosts lessons for over a hundred community members."
        />
      </Helmet>

      <span className="innerPageBlock"></span>

      <section className="AcaOffSec padSec top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="globalHeadingWrap">
                <h1 className="globalHeading">
                  Khuwaja Mashooqullah Music Room
                </h1>
                <p>
                  Khwaja Mashooqullah Music Room came about as a manifestation
                  of the generous donation accorded by the Mashooqullah Family
                  to Habib University's musical endeavors. The space provides
                  experiential musical learning to students, staff and faculty
                  at Habib University. Comprising dedicated rooms for Sitar,
                  Violin, Tabla and Vocal lessons, the Music Room hosts lessons
                  for over a hundred community members under the guidance of
                  musical maestros. The place stands as a testament to Habib's
                  commitment of reviving forgotten histories and abandoned
                  legacies, of imbibing the spirit of South Asia, and to duly
                  (re)introduce the inhabitants of this landscape to their
                  cultural and aesthetic inheritance.
                </p>
              </div>
            </div>
          </div>
          <ul className="abtImagesWrap mr">
            <li>
              <img src={m1} alt="Musical exploration course"  width="639" height="396"/>
            </li>
            <li>
              <img src={m2} alt="Interdisciplinary musical study"  width="639" height="396"/>
            </li>
          </ul>
        </div>
      </section>

      {/* instruxtors  */}
      <section className="AcaOffSec padSec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading two">Teaching Community</h2>
              </div>
            </div>
          </div>
          <ul className="abtImagesWrap mr tc">
            <Link to={"/music-room/intezar-hussain-vocal-instructor"}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={m3} alt="Intezar Hussain | Vocal Instructor" width="620" height="750" />
                  </div>
                  <div className="overImgText">
                    <h3>Intezar Hussain</h3>
                    <h4>Vocal Instructor</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/music-room/islam-uddin-mir"}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={m4} alt="Islamuddin Meer | Violin Instructor" width="620" height="750" />
                  </div>
                  <div className="overImgText">
                    <h3>Islamuddin Meer</h3>
                    <h4>Violin Instructor</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/music-room/shehroze-hussain-sitar-instructor"}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={m5} alt="Shehroze Hussain | Sitar Instructor" width="620" height="750" />
                  </div>
                  <div className="overImgText">
                    <h3>Shehroze Hussain</h3>
                    <h4>Sitar Instructor</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"/music-room/zohaib-khursheed-hussain-tabla-instructor"}>
              <div className="hoverImgBox">
                <div className="InnerWraperImg">
                  <div className="imgWrap">
                    <img src={m6} alt="Zohaib Hussain | Tabla Instructor" width="620" height="750" />
                  </div>
                  <div className="overImgText">
                    <h3>Zohaib Hussain</h3>
                    <h4>Tabla Instructor</h4>
                  </div>
                </div>
              </div>
            </Link>
          </ul>
        </div>
      </section>

      {/* late instructor */}
      <section className="AcaOffSec padSec PastUstad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading two">
                  Remembring the Great Ustads
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <ul className="abtImagesWrap mr ">
                <Link to={"/music-room/ustad-khursheed"}>
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={m7} alt="Ustad Khurshid Hussain | Tabla Instructor" width="620" height="750" />
                      </div>
                      <div className="overImgText">
                        <h3>Ustad Khurshid Hussain</h3>
                        <h4>Tabla Instructor</h4>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/music-room/ustad-sajid-hussain"}>
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={m8} alt="Ustad Sajid Hussain | Sitar Instructor" width="620" height="750" />
                      </div>
                      <div className="overImgText">
                        <h3>Ustad Sajid Hussain</h3>
                        <h4>Sitar Instructor</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicRoom;
