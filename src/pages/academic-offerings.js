import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Import images
import img1 from '../assets/images/acaOffering/profile01.webp';
import img2 from '../assets/images/acaOffering/Profile02.webp';
import img3 from '../assets/images/acaOffering/Profile03.webp';
import imgAlex from '../assets/images/acaOffering/alex-kreger.webp';
import imgArsalan from '../assets/images/acaOffering/arsalan.webp';
import imgDaniyal from '../assets/images/acaOffering/daniyal.webp';
import imgNighat from '../assets/images/acaOffering/nighat.webp';
import imgXiaoxi from '../assets/images/acaOffering/xiaoxi.webp';
import imgKabir from '../assets/images/acaOffering/kabir.webp';

// Import components
// import TabContent from '../components/AcaoffTabs';
import CustomSlider from '../components/custom-slider';
import CustomSlider2 from '../components/custom-slide2';

const AcademicOfferings = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>ACADEMIC OFFERINGS - Center for South Asian Music</title>
        <link rel="canonical" href="https://habib.edu.pk/music/academic-offerings" />
        <meta
          name="description"
          content="Embark on a journey of musical exploration and academic inquiry with our diverse array of courses led by esteemed instructors."
        />
      </Helmet>

      <span className='innerPageBlock'></span>

      {/* acadmeic off sec */}
      <Academic_Main />

      {/* Teaching community sec */}
      <section className='AcaOffSec teach-com padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading two'>Teaching Community</h2>
              </div>
            </div>
          </div>
          <div className="home-event-pics">
            
              {/* <ul className="abtImagesWrap"> */}
              <CustomSlider2 showDots={false} showArrows={true} autoplay={true} autoplaySpeed={5000} scrollOnSmallScreens={true}>
            
                <a href="https://habib.edu.pk/AHSS/shahid-hamid/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={img3} alt="Ustad Shahid Hamid" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Ustad Shahid Hamid</h3>
                        <h4>Visiting Associate Professor of Practice, Comparative Humanities</h4>
                      </div>
                    </div>
                  </div>
                </a>
             
                <a href="https://habib.edu.pk/SSE/yousuf-kerai/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={img1} alt="Yousuf Kerai, M.A.T" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Yousuf Kerai, M.A.T</h3>
                        <h4>Associate Professor of Practice, Comparative Humanities</h4>
                      </div>
                    </div>
                  </div>
                </a>
              
                <a href="https://habib.edu.pk/AHSS/dr-aaron-mulvany/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={img2} alt="Aaron Molvany, PH.D." width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Aaron Molvany, PH.D.</h3>
                        <h4>Associate Professor, Social Development and Policy</h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://habib.edu.pk/AHSS/alexander-kreger-ph-d/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={imgAlex} alt="Alex Kreger" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Alex Kreger Ph.D.</h3>
                        <h4>Global Fellow</h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://habib.edu.pk/AHSS/nighat-chaudhry/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={imgNighat} alt="Nighat Chaudhry" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Nighat Chaudhry M.S</h3>
                        <h4>Professor of Practice</h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://habib.edu.pk/AHSS/xiaoxi-zhang-ph-d/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={imgXiaoxi} alt="Xiaoxi Zhang" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Xiaoxi Zhang Ph.D.</h3>
                        <h4>Global Fellow</h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://habib.edu.pk/AHSS/arsalan-pareyal-m-s/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={imgArsalan} alt="Arsalan Pareyal" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Arsalan Pareyal M.S </h3>
                        <h4>Assistant Professor of Practice</h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://habib.edu.pk/AHSS/daniyal-ahmed/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={imgDaniyal} alt="Daniyal Ahmed" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Daniyal Ahmed M.A. </h3>
                        <h4>Affiliated Assistant Professor of Practice</h4>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://habib.edu.pk/AHSS/kabir-altaf-m-s/" target="_blank" rel="noopener noreferrer">
                  <div className="hoverImgBox">
                    <div className="InnerWraperImg">
                      <div className="imgWrap">
                        <img src={imgKabir} alt="Kabir Altaf" width="620" height="750"/>
                      </div>
                      <div className="overImgText">
                        <h3>Kabir Altaf M.S </h3>
                        <h4>Assistant Professor of Practice</h4>
                      </div>
                    </div>
                  </div>
                </a>

              </CustomSlider2>
            {/* </ul> */}
           
          </div>
        </div>
      </section>
    </>
  );
};

function Academic_Main() {
  const [activeIndex, setActiveIndex] = useState(null);

  const tabData = [
    {
      title: "Music of South Asia: Style and Structures",
      content:`
        <p>This course will introduce students to the rudiments of South Asian music; its melodic and rhythmic bases and the various existing styles of performance. From understanding structural differences between genres such as folk, ghazal, thumri and khayal to recognizing stylistic differences between gharanas, this course will be an immersion into a musical realm that is largely unfamiliar to young listeners. With a mandatory practice component through the Khanqah Nimatollahi Music Room, audio-visual resources, and readings to provide context, the course will serve as a foundation for pursuing more advanced studies in music.</p>`,
    },
    {
      title: "Music and Mathematics",
      content:`
        <p>This course introduces the rudiments of Western and South Asian musical theory, with a focus on the mathematics incorporated in their development and overall structure. It explores the properties of the twelve-tone scale, the historical evolution of tuning and temperament, the idea of combinational tones and consonance, and the physics behind the construction of musical instruments. Looking primarily at South Asian and Western musical genres, students are required to analyze the mathematics involved in music composition, for both melody and rhythm.</p>`,
    },
    {
      title: "Rhythm & Rapport",
      content:`
        <p>This course will traverse the deep and rich repertoire of tabla performance, its styles and lineages that emerged as a result of its expansion outwards from 18th Century Delhi into various parts of Northern India. Students will learn the basic syllables and beat cycles in tabla and slowly prepare to decipher and analyze the rhythmic discourse of the various gharanas of tabla through a unique mixture of theory, history and practice.</p>`,
    },
    {
      title: "Sound and Subjectivity: Listening to other",
      content:`
        <p>The experience of listening to sound and music from cultures and contexts that are unfamiliar to us, can be both blissful and elating, as well as bizarre and alienating. The affect produced by strange sounds and foreign musical structures is determined by the subjectivities that constitute our own ways of listening. What then, is the nature of listening? How should we listen to, engage with, and understand music from other cultures, contexts, and traditions? How have disciplines like anthropology, musicology, and ethnomusicology historically addressed and understood non-western music? What are the variety of meanings- social, cultural, religious, and political- that music continues to be imbued with? What does our experience of listening to the Other tell us about ourselves? These questions form the core basis of inquiry in this course. This is a survey course of selected musical cultures and traditions of the world that is organized through an aural geography that takes the subjectivity of our listening as its point of departure.</p>`,
    },
    {
      title: "Hamari Meraas: History and Discourse of South Asian Music",
      content:`
        <p>A common perspective about South Asian “classical” music is that it's a static form of music, innovated by Mughal patrons and only accessible to a particular class. A lot of these perceptions stem from the modern politicized vision of history as well as the discourse of this music’s Orientalist other— Western classical music. This is the first assumption we will unravel; in the context of South Asian music, what does “classical” actually mean? What influenced aesthetic principles? Who were the early practitioners? Why did this music gain popularity in the courtly setting? Which milieu did it thrive and flourish in? How does it reflect various socio-historic contexts? How does modern day nationalism shape discourse on music?Not only can this historical and critical inquiry inform us about the musical system, but the musical system itself can challenge our ways of understanding history, cultural practices and societal interactions.</p>`,
    },
    {
      title: "Musicking: Anthropology of music",
      content:`
        <p>Music is social, an activity to be engaged in rather than an object to be possessed or observed. Music is collaborative construction, signifier and signified. Drawing fundamental concepts and theories from anthropology and critical theory, students in this course will explore human sociality through an activity with which we can all identify: music-making.</p>`,
    },
    {
      title: "Breathing Bansuri",
      content:`
        <p>Every known human culture has created a flute, and the Bansuri is the primary flute of South Asia. Bans means Bamboo and Sur connotes melody. Made by burning holes in a hollow bamboo, it is one of the simplest instruments in the world, yet capable of producing the most complex sonic nuances and ornamentations. The Bansuri scarcely needs us to continue its enduring legacy, but neglecting it would be our own misfortune. This course offers students the opportunity to embark on what will hopefully be a lifelong relationship with the instrument and its music. Breathing in to the Bansuri, is a portal to numerous new worlds, within and without.</p>`,
    },
    {
      title: "Ghazal Gayeki: A cultural legacy of South Asia",
      content:`
      <p>This course will delve deep into the pedagogy of Ghazal singing, introducing students to its history as well as its foundational concepts and praxis. Using contemporary musical framework of Ghazal Gayeki, students will be familiarized with the architecture of Ghazal performance, including the introductory Alaap, selection of poetry, structure of melody, rhythmic pattern, and the proper dialect and pronunciations in Ghazal poetry. We will engage with various stylistic lineages and identify ways in which some stalwarts employ various ornamental techniques to create their characteristic styles. A comparative study of different aesthetic ideals and genres within Ghazal itself, such as Raag-based Ghazal, Thumri Ang Ghazal, Geet style Ghazal and Mujra Ang Ghazal, will orient students in their exploration of true expressions, improvisation and nuances in Ghazal singing.</p>`,
    },
    {
      title: "Thumri ki kahani: Romance in Raag Form",
      content:`
        <p>This course will develop a student into a good listener and performer (if having vocal ability) in accordance with his/her own capacity and aspiration. It will introduce students to the Thumri genre, tracing its foundational concepts and development into a refined form of singing. Using contemporary musical framework of Thumri singing, students will be familiarized with the architecture of Thumri performance, including its evolution, lyrical themes, flexible melodic structure, rhythmic pattern and the art of Bol Bant (lyrical allocation according to rhythmic cycles). We will remain engaged with various stylistic lineages of some of the stalwarts by decoding the musical language and understanding their unique characteristic styles. A comparative study of different aesthetic ideals and genres within and around the Thumri, such as Dadra and Ghazal, will orient students in their exploration of true expressions, and improvisation in Thumri singing. By the end of the course, students will not only be able to appreciate a wide range of Thumris sung in Raags such as Pahadi, Khamaj, Des, Piloo, Bhairvi and Sohni but also to create an impressive repertoire of their own.</p>`,
    },
    {
      title: "Khayal Gayeki: The Aesthetics and Evolution of a Vocal Form",
      content:`
        <p>This course will introduce students to some basic history as well as foundational theory and praxis. We will work with the contemporary theoretical framework of Raga’s categorized into ten primary Thaats (developed by Bhatkhande). Students will be familiarized with the architecture of a Khayal performance, including alap, bandish and taans as well as to the various forms of ornamentation. We will also engage with various stylistic lineages and identify ways in which these musicians employ various ornamental techniques to create their characteristic sound and emotional affect. A comparative study of different aesthetic ideals and genres such as Thumri, Ghazal and film songs will further orient students in their exploration of Khayal. Ultimately, the primary focus of the course is on the praxis of Khayal, through learning multiple Raga’s and their characteristic movements, phrases and ornamentations.</p>`,
    },
    {
      title: "Art of Kathak: Theoretical Foundations and Practical Application",
      content:`
        <p>This course introduces students to the fundamentals of classical Kathak dance, exploring both its practical and theoretical aspects. It covers intricate footwork patterns, rhythmic complexities, hand gestures (mudras), facial expressions, and body movements. The course also delves into the theoretical frameworks and key treatises that have shaped the understanding and practice of Kathak, providing insights into its historical significance and evolution. A focus will be placed on the teental rhythm, a 16-beat rhythmic cycle commonly used in Kathak performances, enhancing students' knowledge of the musical aspects of the dance. The course also explores the religious dimensions of Kathak, its connections to Hindu and Muslim traditions, and its syncretic nature, while examining the social and cultural factors that have shaped Kathak through historical patrons and the formation of gharanas. Research will be conducted to analyze the historical, social, and political power structures that influenced the art form, including the patronage of Mughal emperors, colonial administrations, and the influence of cultural hegemony and external interactions on Kathak's identity and adaptability.</p>`,
    },
    {
      title: "Methods for Music (and Other Topics)",
      content:`
        <p>Music and bananas have two similar attributes that facilitate the fallacy of misplaced concreteness, wrote ethnomusicologist Anthony Seeger in the 2002 Yearbook for Traditional Music. This course provides students with methods and tools for thinking through and describing music's misplaced concreteness while giving them the opportunity to apply ethnographic methods to design and implement a small study about music in Karachi. Fieldwork about music is a requirement of this course. There will also be some bananas.</p>`,
    },
    {
      title: "Vibrate! Music, Wor(I)d, and Transdisciplinary Activism",
      content: `
        <p>Throughout the ages, the enigmatic nature and concrete existence of music—an autonomous form of human expression that embodies history and mediates interpersonal relationships—has inspired endless thought in various forms, often expressed both in words and deeds, across different spaces and languages. Yet, instead of residing in a utopian otherworld, many musicians face harsh social conditions as they strive to survive and keep the art alive, highlighting the urgency of critical and activist interventions.</p>
        <ul>
          <li>First, to better understand the world and its diverse inhabitants across spatial, temporal, and cultural divides by studying various musical traditions and writings on music.</li>
          <li>Second, to reflect on and discuss key questions such as: What is music? How should we understand the relationship between music and words across different socio-historical settings? What does it mean to think and live musically?</li>
          <li>Third, in response to the various conceptual and material challenges facing music locally and globally, we will collaborate on an interdisciplinary project designed to make a meaningful intervention toward solving a relevant problem.</li>
        </ul>
      `,
    },
  ];

  const toggleContent = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='AcaOffSec padSec top'>
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
          <h1 className='globalHeading'>Academic Offerings</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {tabData.map((tab, index) => (
              <TabContent
                key={index}
                title={tab.title}
                content={tab.content}
                isVisible={activeIndex === index}
                toggleContent={() => toggleContent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function TabContent({ title, content, isVisible, toggleContent }) {
  return (
    <div className="academic-common">
      <div className="tab-header" onClick={toggleContent}>
        <h3>{title}</h3>
        <span id="spec">
          {isVisible ? '-' : '+'}
        </span>
      </div>
      <div 
        className={`tab-content ${isVisible ? 'show' : ''}`} 
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
}


export default AcademicOfferings;
