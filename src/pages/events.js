import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// import "../assets/css/stylesheet.css";

// Import images
import eventImg1 from "../assets/images/event-assets/01/thumbnail.jpg";
import eventImg2 from "../assets/images/event-assets/02/Thumbnail.jpg";
import eventImg3 from "../assets/images/event-assets/03/Thumbnail.jpg";
import eventImg4 from "../assets/images/event-assets/04/Thumbnail.jpg";
import eventImg5 from "../assets/images/event-assets/05_Week of Welcome - Musical Evening/Thumbnail.jpg";
import eventImg6 from "../assets/images/event-assets/06_Week of Welcome/Thumbnail.jpg";
import eventImg7 from "../assets/images/event-assets/07_Khayal - Imagination in Sound/Thumbnail.jpg";
import eventImg8 from "../assets/images/event-assets/08_Khayal - Imagination in Sound/Thumbnail.jpg";
import eventImg9 from "../assets/images/event-assets/09_Khayal - Imagination in Sound/Thumbnail.jpg";
import eventImg10 from "../assets/images/event-assets/10_Khayal - Imagination in Sound/Thumbnail.jpg";
import eventImg11 from "../assets/images/event-assets/11_Nazaakat aur Taakat/Thumbnail.jpg";
import eventImg12 from "../assets/images/event-assets/12_Awards Night/Thumbnail.jpg";
import eventImg13 from "../assets/images/event-assets/13_The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid/Thumbnail.jpg";
import eventImg14 from "../assets/images/event-assets/14_Week of Welcome/Thumbnail.jpg";
import eventImg15 from "../assets/images/event-assets/15_Musicking through Makran with Ustad Noor Baksh/Thumbnail.jpg";
import eventImg16 from "../assets/images/event-assets/16_Ghazal Kay Rang/Thumbnail.jpg";
import eventImg17 from "../assets/images/event-assets/17_Khursheed-e-Fann/Thumbnail.jpg";
import eventImg18 from "../assets/images/event-assets/18_Baithak with Ustad Badar uz Zaman/Thumbnail.jpg";
import eventImg19 from "../assets/images/event-assets/19_Listening Through the Times with Nizar Lalani/Thumbnail.jpg";
import eventImg20 from "../assets/images/event-assets/20_Khayal - Imagination in Sound/Thumbnail.jpg";
import eventImg21 from "../assets/images/event-assets/21_Khayal - Imagination in Sound/Thumbnail.jpg";
import eventImg22 from "../assets/images/event-assets/22_Vocals Lecture Demo with Muslim Shaggan/Thumbnail.jpg";
import eventImg23 from "../assets/images/event-assets/23_Ghazal Kay Rang/Thumbnail.jpg";
import eventImg24 from "../assets/images/event-assets/24_Awards Night/Thumbnail.jpg";
import eventImg25 from "../assets/images/event-assets/25_Karoonjhar Mountains - World Heritage Site or Granite Reserve/Thumbnail.jpg";
import eventImg26 from "../assets/images/event-assets/26_Ghazal Kay Rang/Thumbnail.jpg";
import eventImg27 from "../assets/images/event-assets/27_Campus Visit - Ustad Shafqat Ali Khan/Thumbnail.jpg";
import eventImg28 from "../assets/images/event-assets/28_Ghazal Kay Rang/Thumbnail.jpg";
import eventImg29 from "../assets/images/event-assets/29_Khayal - Imagination in Sound/Thumbnail.jpg";
import eventImg30 from "../assets/images/event-assets/30_Khayal Se Ghazal Tak/Thumbnail.jpg";
import eventImg31 from "../assets/images/event-assets/31_Bansuri Workshop with Ustad Hanif Khan/Thumbnail.jpg";
import eventImg32 from "../assets/images/event-assets/32_The Evolution of Khayal/Thumbnail.jpg";
import eventImg33 from "../assets/images/event-assets/33_Echoes of Tradition - The Art of Tabla Solo with Ustad Shahbaz Hussain/Thumbnail.jpg";
import eventImg34 from "../assets/images/event-assets/34_Awards Night/Thumnail.jpg";

const Events = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMoreItems = () => {
    if (visibleItems >= events.length) {
      setVisibleItems(6);
    } else {
      setVisibleItems(prev => prev + 3);
    }
  };

  const events = [
    {
      to: "/events/awards-night-30-may-2024",
      img: eventImg34,
      title: "Awards Night",
      date: "30/May/2024",
    },
    {
      to: "/events/echoes-of-tradition-the-art-of-tabla-solo-with-ustad-shahbaz-hussain-07-mar-2024",
      img: eventImg33,
      title:
        "Echoes of Tradition: The Art of Tabla Solo with Ustad Shahbaz Hussain",
      date: "07/Mar/2024",
    },
    {
      to: "/events/the-evolution-of-khayal-05-mar-2024",
      img: eventImg32,
      title: "The Evolution of Khayal",
      date: "05/Mar/2024",
    },
    {
      to: "/events/bansuri-workshop-with-ustad-hanif-khan-29-feb-2024",
      img: eventImg31,
      title: "Bansuri Workshop with Ustad Hanif Khan",
      date: "29/Feb/2024",
    },
    {
      to: "/events/khayal-se-ghazal-tak-27-feb-2024",
      img: eventImg30,
      title: "Khayal Se Ghazal Tak",
      date: "27/Feb/2024",
    },
    {
      to: "/events/khayal-imagination-in-sound-13-feb-2024",
      img: eventImg29,
      title: "Khayal: Imagination in Sound",
      date: "13/Feb/2024",
    },
    {
      to: "/events/ghazal-kay-rang-25-jan-2024",
      img: eventImg28,
      title: "Ghazal Kay Rang",
      date: "25/Jan/2024",
    },
    {
      to: "/events/campus-visit-ustad-shafqat-ali-khan-27-nov-2023",
      img: eventImg27,
      title: "Campus Visit | Ustad Shafqat Ali Khan",
      date: "27/Nov/2023",
    },
    {
      to: "/events/ghazal-kay-rang-26-oct-2023",
      img: eventImg26,
      title: "Ghazal Kay Rang",
      date: "26/Oct/2023",
    },
    {
      to: "/events/karoonjhar-mountains-world-heritage-site-or-granite-reserve-19-oct-2023",
      img: eventImg25,
      title: "Karoonjhar Mountains: World Heritage Site or Granite Reserve",
      date: "19/Oct/2023",
    },
    {
      to: "/events/awards-night-25-may-2023",
      img: eventImg24,
      title: "Awards Night",
      date: "25/May/2023",
    },
    {
      to: "/events/ghazal-kay-rang-09-mar-2023",
      img: eventImg23,
      title: "Ghazal Kay Rang",
      date: "09/Mar/2023",
    },
    {
      to: "/events/vocals-lecture-demo-with-muslim-shaggan-07-mar-2023",
      img: eventImg22,
      title: "Vocals Lecture Demo with Muslim Shaggan",
      date: "07/Mar/2023",
    },
    {
      to: "/events/khayal-imagination-in-sound-28-feb-2023",
      img: eventImg21,
      title: "Khayal: Imagination in Sound",
      date: "28/Feb/2023",
    },
    {
      to: "/events/khayal-imagination-in-sound-16-feb-2023",
      img: eventImg20,
      title: "Khayal: Imagination in Sound",
      date: "16/Feb/2023",
    },
    {
      to: "/events/listening-through-the-times-with-nizar-lalani-26-jan-2023",
      img: eventImg19,
      title: "Listening Through the Times with Nizar Lalani",
      date: "26/Jan/2023",
    },
    {
      to: "/events/baithak-with-ustad-badar-uz-zaman-28-nov-2022",
      img: eventImg18,
      title: "Baithak with Ustad Badar uz Zaman",
      date: "28/Nov/2022",
    },
    {
      to: "/events/khursheed-e-fann-11-nov-2022",
      img: eventImg17,
      title: "Khursheed-e-Fann",
      date: "11/Nov/2022",
    },
    {
      to: "/events/ghazal-kay-rang-11-oct-2022",
      img: eventImg16,
      title: "Ghazal Kay Rang",
      date: "11/Oct/2022",
    },
    {
      to: "/events/musicking-through-makran-with-ustad-noor-baksh-30-sept-2022",
      img: eventImg15,
      title: "Musicking through Makran with Ustad Noor Baksh",
      date: "30/Sept/2022",
    },
    {
      to: "/events/week-of-welcome-musical-evening-22-sept-2022",
      img: eventImg14,
      title: "Week of Welcome: Musical Evening",
      date: "22/Sept/2022",
    },
    {
      to: "/events/the-science-of-tabla-sound-a-talk-by-dr-abdullah-khalid-09-june-2022",
      img: eventImg13,
      title: "The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid",
      date: "09/June/2022",
    },
    {
      to: "/events/awards-night-02-june-2022",
      img: eventImg12,
      title: "Awards Night",
      date: "02/June/2022",
    },
    {
      to: "/events/nazaakat-aur-taakat-25-mar-2022",
      img: eventImg11,
      title: "Nazaakat aur Taakat",
      date: "25/Mar/2022",
    },
    {
      to: "/events/khayal-imagination-in-sound-17-mar-2022",
      img: eventImg10,
      title: "Khayal: Imagination in Sound",
      date: "17/Mar/2022",
    },
    {
      to: "/events/khayal-imagination-in-sound-08-mar-2022",
      img: eventImg9,
      title: "Khayal: Imagination in Sound",
      date: "08/Mar/2022",
    },
    {
      to: "/events/khayal-imagination-in-sound-22-feb-2022",
      img: eventImg8,
      title: "Khayal: Imagination in Sound",
      date: "22/Feb/2022",
    },
    {
      to: "/events/khayal-imagination-in-sound-16-nov-2021",
      img: eventImg7,
      title: "Khayal: Imagination in Sound",
      date: "16/Nov/2021",
    },
    {
      to: "/events/week-of-welcome-musical-evening-12-mar-2021",
      img: eventImg6,
      title: "Week of Welcome: Musical Evening",
      date: "12/Mar/2021",
    },
    {
      to: "/events/week-of-welcome-musical-evening-30-aug-2019",
      img: eventImg5,
      title: "Week of Welcome: Musical Evening",
      date: "30/Aug/2019",
    },
    {
      to: "/events/awards-night-14-june-2019",
      img: eventImg4,
      title: "Awards Night",
      date: "14/June/2019",
    },
    {
      to: "/events/raag-time-05-mar-2019",
      img: eventImg3,
      title: "Raag Time",
      date: "05/Mar/2019",
    },
    {
      to: "/events/drum-circle-welcoming-spring-17-jan-2019",
      img: eventImg2,
      title: "Drum Circle: Welcoming Spring",
      date: "17/Jan/2019",
    },
    {
      to: "/events/andaaz-the-dance-concert-30-nov-2018",
      img: eventImg1,
      title: "Andaaz: The Dance Concert",
      date: "30/Nov/2018",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Events - Center for South Asian Music</title>
      </Helmet>

      <span className="innerPageBlock"></span>
      <section className="eventsSec padSec top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="globalHeadingWrap">
                <h2 className="globalHeading two">Events</h2>
              </div>
            </div>
          </div>

          {/* <ul className="gridviewBox">
            <li>
              <Link to={"/events/awards-night-30-may-2024"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg34} alt="Awards Night event" />
                    </div>
                    <div className="overImgText">
                      <h3>Awards Night</h3>
                      <h4>Dated: 30/May/2024</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={
                  "/events/echoes-of-tradition-the-art-of-tabla-solo-with-ustad-shahbaz-hussain-07-mar-2024"
                }
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg33}
                        alt="Echoes of Tradition: The Art of Tabla Solo with Ustad Shahbaz Hussain event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>
                        Echoes of Tradition: The Art of Tabla Solo with Ustad
                        Shahbaz Hussain
                      </h3>
                      <h4>Dated: 07/Mar/2024</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/the-evolution-of-khayal-05-mar-2024"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg32}
                        alt="The Evolution of Khayal event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>The Evolution of Khayal</h3>
                      <h4>Dated: 05/Mar/2024</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={
                  "/events/bansuri-workshop-with-ustad-hanif-khan-29-feb-2024"
                }
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg31}
                        alt="Bansuri Workshop with Ustad Hanif Khan event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Bansuri Workshop with Ustad Hanif Khan</h3>
                      <h4>Dated: 29/Feb/2024</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-se-ghazal-tak-27-feb-2024"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg30} alt="Khayal Se Ghazal Tak event" />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal Se Ghazal Tak</h3>
                      <h4>Dated: 27/Feb/2024</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-imagination-in-sound-13-feb-2024"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg29}
                        alt="Khayal: Imagination in Sound event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal: Imagination in Sound</h3>
                      <h4>Dated: 13/Feb/2024</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/ghazal-kay-rang-25-jan-2024"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg28} alt="Ghazal Kay Rang event" />
                    </div>
                    <div className="overImgText">
                      <h3>Ghazal Kay Rang</h3>
                      <h4>Dated: 25/Jan/2024</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={"/events/campus-visit-ustad-shafqat-ali-khan-27-nov-2023"}
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg27}
                        alt="Campus Visit | Ustad Shafqat Ali Khan event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Campus Visit | Ustad Shafqat Ali Khan</h3>
                      <h4>Dated: 27/Nov/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/ghazal-kay-rang-26-oct-2023"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg26} alt="Ghazal Kay Rang event" />
                    </div>
                    <div className="overImgText">
                      <h3>Ghazal Kay Rang</h3>
                      <h4>Dated: 26/Oct/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={
                  "/events/karoonjhar-mountains-world-heritage-site-or-granite-reserve-19-oct-2023"
                }
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg25}
                        alt="Karoonjhar Mountains: World Heritage Site or Granite Reserve event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>
                        Karoonjhar Mountains: World Heritage Site or Granite
                        Reserve
                      </h3>
                      <h4>Dated: 19/Oct/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/awards-night-25-may-2023"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg24} alt="Awards Night event" />
                    </div>
                    <div className="overImgText">
                      <h3>Awards Night</h3>
                      <h4>Dated: 25/May/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/ghazal-kay-rang-09-mar-2023"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg23} alt="Ghazal Kay Rang event" />
                    </div>
                    <div className="overImgText">
                      <h3>Ghazal Kay Rang</h3>
                      <h4>Dated: 09/Mar/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={
                  "/events/vocals-lecture-demo-with-muslim-shaggan-07-mar-2023"
                }
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg22}
                        alt="Vocals Lecture Demo with Muslim Shaggan event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Vocals Lecture Demo with Muslim Shaggan</h3>
                      <h4>Dated: 07/Mar/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-imagination-in-sound-28-feb-2023"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg21}
                        alt="Khayal: Imagination in Sound event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal: Imagination in Sound</h3>
                      <h4>Dated: 28/Feb/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-imagination-in-sound-16-feb-2023"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg20}
                        alt="Khayal: Imagination in Sound event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal: Imagination in Sound</h3>
                      <h4>Dated: 16/Feb/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={
                  "/events/listening-through-the-times-with-nizar-lalani-26-jan-2023"
                }
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg19}
                        alt="Listening Through the Times with Nizar Lalani event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Listening Through the Times with Nizar Lalani</h3>
                      <h4>Dated: 26/Jan/2023</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={"/events/baithak-with-ustad-badar-uz-zaman-28-nov-2022"}
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg18}
                        alt="Baithak with Ustad Badar uz Zaman event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Baithak with Ustad Badar uz Zaman</h3>
                      <h4>Dated: 28/Nov/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khursheed-e-fann-11-nov-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg17} alt="Khursheed-e-Fann event" />
                    </div>
                    <div className="overImgText">
                      <h3>Khursheed-e-Fann</h3>
                      <h4>Dated: 11/Nov/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/ghazal-kay-rang-11-oct-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg16} alt="Ghazal Kay Rang event" />
                    </div>
                    <div className="overImgText">
                      <h3>Ghazal Kay Rang</h3>
                      <h4>Dated: 11/Oct/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={
                  "/events/musicking-through-makran-with-ustad-noor-baksh-30-sept-2022"
                }
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg15}
                        alt="Musicking through Makran with Ustad Noor Baksh event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Musicking through Makran with Ustad Noor Baksh</h3>
                      <h4>Dated: 30/Sept/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/week-of-welcome-musical-evening-22-sept-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg14}
                        alt="Week of Welcome: Musical Evening event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Week of Welcome: Musical Evening</h3>
                      <h4>Dated: 22/Sept/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to={
                  "/events/the-science-of-tabla-sound-a-talk-by-dr-abdullah-khalid-09-june-2022"
                }
              >
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg13}
                        alt="The Science of Tabla Sound, A Talk by Dr. Abdullah Khalid event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>
                        The Science of Tabla Sound, A Talk by Dr. Abdullah
                        Khalid
                      </h3>
                      <h4>Dated: 09/June/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/awards-night-02-june-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg12} alt="Awards Night event" />
                    </div>
                    <div className="overImgText">
                      <h3>Awards Night</h3>
                      <h4>Dated: 02/June/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/nazaakat-aur-taakat-25-mar-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg11} alt="Nazaakat aur Taakat event" />
                    </div>
                    <div className="overImgText">
                      <h3>Nazaakat aur Taakat</h3>
                      <h4>Dated: 25/Mar/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-imagination-in-sound-17-mar-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg10}
                        alt="Khayal: Imagination in Sound event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal: Imagination in Sound</h3>
                      <h4>Dated: 17/Mar/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-imagination-in-sound-08-mar-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg9}
                        alt="Khayal: Imagination in Sound event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal: Imagination in Sound</h3>
                      <h4>Dated: 08/Mar/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-imagination-in-sound-22-feb-2022"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg8}
                        alt="Khayal: Imagination in Sound event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal: Imagination in Sound</h3>
                      <h4>Dated: 22/Feb/2022</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/khayal-imagination-in-sound-16-nov-2021"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg7}
                        alt="Khayal: Imagination in Sound event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Khayal: Imagination in Sound</h3>
                      <h4>Dated: 16/Nov/2021</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/week-of-welcome-musical-evening-12-mar-2021"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg6}
                        alt="Week of Welcome: Musical Evening event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Week of Welcome: Musical Evening</h3>
                      <h4>Dated: 12/Mar/2021</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/week-of-welcome-musical-evening-30-aug-2019"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg5}
                        alt="Week of Welcome: Musical Evening event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Week of Welcome: Musical Evening</h3>
                      <h4>Dated: 30/Aug/2019</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/awards-night-14-june-2019"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg4} alt="Awards Night event" />
                    </div>
                    <div className="overImgText">
                      <h3>Awards Night</h3>
                      <h4>Dated: 14/June/2019</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/raag-time-05-mar-2019"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img src={eventImg3} alt="Raag Time event" />
                    </div>
                    <div className="overImgText">
                      <h3>Raag Time</h3>
                      <h4>Dated: 05/Mar/2019</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/drum-circle-welcoming-spring-17-jan-2019"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg2}
                        alt="Drum Circle: Welcoming Spring event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Drum Circle: Welcoming Spring</h3>
                      <h4>Dated: 17/Jan/2019</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link to={"/events/andaaz-the-dance-concert-30-nov-2018"}>
                <div className="hoverImgBox">
                  <div className="InnerWraperImg">
                    <div className="imgWrap">
                      <img
                        src={eventImg1}
                        alt="Andaaz: The Dance Concert event"
                      />
                    </div>
                    <div className="overImgText">
                      <h3>Andaaz: The Dance Concert</h3>
                      <h4>Dated: 30/Nov/2018</h4>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul> */}

          <ul className="gridviewBox">
            {events.slice(0, visibleItems).map((event, index) => (
              <li key={index}>
                <Link to={event.to}>
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={event.img} alt={event.title} />
                      </div>
                      <div className="overImgText">
                        <h3>{event.title}</h3>
                        <h4>Dated: {event.date}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          
            <div className="eve-button-conatin">
            <span onClick={loadMoreItems} className="globalBtn borderBtn">
            {visibleItems >= events.length ? "Show Less" : "Load More"}
            </span>
            </div>
          
        </div>
      </section>
    </>
  );
};

export default Events;
