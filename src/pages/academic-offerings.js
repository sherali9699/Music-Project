import React, {useState} from 'react';
import '../assets/css/stylesheet.css';

//importing Tabs
import Tab from '../components/AcaoffTabs'

// Import images
import img1 from '..//assets/images/acaOffering/acaOff-1.webp';
import img3 from '..//assets/images/acaOffering/acaOff-2.webp'
import img2 from '..//assets/images/acaOffering/acaOff-3.webp';


const AcademicOfferings = () => {
  return (
    <>

    {/* acadmeic off sec */}
    <Academic_Main/>

    {/* Teaching community sec */}
      <section className='AcaOffSec padSec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='globalHeadingWrap'>
                <h2 className='globalHeading'>Teaching Community</h2>
              </div>
            </div>
          </div>
          <ul className='abtImagesWrap'>
          <div className='hoverImgBox'>
            <div className='InnerWraperImg'>
              <div className="imgWrap">
                <img src={img2} alt="Khayal concert event" />
              </div>
              <div className="overImgText">
                <h3>Ustad Shahid Hamid</h3>
                <h4>Visiting Associate Professor of Practice, Comparative Humanities</h4>
              </div>
            </div>
          </div>
          <div className='hoverImgBox'>
            <div className='InnerWraperImg'>
              <div className="imgWrap">
                <img src={img1} alt="Khayal concert event" />
              </div>
              <div className="overImgText">
                <h3>Yosuf Kerai, M.A.T</h3>
                <h4>Associate Professor of Practice, Comparative Humanities</h4>
              </div>
            </div>
          </div>
          <div className='hoverImgBox'>
            <div className='InnerWraperImg'>
              <div className="imgWrap">
                <img src={img3} alt="Khayal concert event" />
              </div>
              <div className="overImgText">
                <h3>Aaron Molvany, PH.D.</h3>
                <h4>Associate Professor, Social Development and Policy</h4>
              </div>
            </div>
          </div>        
        </ul>
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
      content:
        "This course will introduce students to the rudiments of South Asian music; its melodic and rhythmic bases and the various existing styles of performance. From understanding structural differences between genres such as folk, ghazal, thumri and khayal to recognizing stylistic differences between gharanas, this course will be an immersion into a musical realm that is largely unfamiliar to young listeners. With a mandatory practice component through the Khanqah Nimatollahi Music Room, audio-visual resources, and readings to provide context, the course will serve as a foundation for pursuing more advanced studies in music.",
    },
    {
      title: "Music and Mathematics",
      content:
          "This course introduces the rudiments of Western and South Asian musical theory, with a focus on the mathematics incorporated in their development and overall structure. It explores the properties of the twelve-tone scale, the historical evolution of tuning and temperament, the idea of combinational tones and consonance, and the physics behind the construction of musical instruments. Looking primarily at South Asian and Western musical genres, students are required to analyze the mathematics involved in music composition, for both melody and rhythm."
    },
    {
      title: "Sound and Subjectivity: Listening to other",
      content:
        "The experience of listening to sound and music from cultures and contexts that are unfamiliar to us, can be both blissful and elating, as well as bizarre and alienating. The affect produced by strange sounds and foreign musical structures is determined by the subjectivities that constitute our own ways of listening. What then, is the nature of listening? How should we listen to, engage with, and understand music from other cultures, contexts, and traditions? How have disciplines like anthropology, musicology, and ethnomusicology historically addressed and understood non-western music? What are the variety of meanings- social, cultural, religious, and political- that music continues to be imbued with? What does our experience of listening to the Other tell us about ourselves? These questions form the core basis of inquiry in this course. This is a survey course of selected musical cultures and traditions of the world that is organized through an aural geography that takes the subjectivity of our listening as its point of departure.",
    },
    {
      title: "Hamari Meraas: History and Discourse of South Asian Music",
      content:
        "A common perspective about South Asian “classical” music is that it’s a static form of music, innovated by Mughal patrons and only accessible to a particular class. A lot of these perceptions stem from the modern politicized vision of history as well as the discourse of this music’s Orientalist other— Western classical music. This is the first assumption we will unravel; in the context of South Asian music, what does “classical” actually mean? What influenced aesthetic principles? Who were the early practitioners? Why did this music gain popularity in the courtly setting? Which milieu did it thrive and flourish in? How does it reflect various socio-historic contexts? How does modern day nationalism shape discourse on music?Not only can this historical and critical inquiry inform us about the musical system, but the musical system itself can challenge our ways of understanding history, cultural practices and societal interactions.",
    },
    {
      title: "Musicking: Antropology of music",
      content:
        "Music is social, an activity to be engaged in rather than an object to be possessed or observed. Music is collaborative construction, signifier and signified. Drawing fundamental concepts and theories from anthropology and critical theory, students in this course will explore human sociality through an activity with which we can all identify: music-making.",
    },
    {
      title: "Breathing Bansuri",
      content:
        "Every known human culture has created a flute, and the Bansuri is the primary flute of South Asia. Bans means Bamboo and Sur connotes melody. Made by burning holes in a hollow bamboo, it is one of the simplest instruments in the world, yet capable of producing the most complex sonic nuances and ornamentations. The Bansuri scarcely needs us to continue its enduring legacy, but neglecting it would be our own misfortune. This course offers students the opportunity to embark on what will hopefully be a lifelong relationship with the instrument and its music. Breathing in to the Bansuri, is a portal to numerous new worlds, within and without.",
    },
    {
      title: "Gazal Gayeki: A cultural lagecy of South Asia",
      content:
        "The Ghazal, a poetic love sonnet in Urdu, is the cultural legacy of South Asia. Before the 13th century the language of poetry was primarily Brij Bhasha and Ameer Khusrau innovated by combining it with Persian. The first established Urdu poet was Wali Deccani who adopted what can be considered Urdu as we know it today. Delhi appeared as an important centre for this language, followed by Lucknow. Even though these literary capitals had their individual styles, the Ghazal reached its zenith in Delhi with Mir Taqi Mir and Mirza Ghalib.Today the Ghazal is also a musical genre, and a number of early Ghazal singers were trained in the Khayal and Thumri style of singing. In the Ghazal, the lyrics are of supreme importance, hence a good command on the language is as essential as the command over the style of singing. The last century was what can be considered as the golden age of Ghazal singing with Begum Akhtar, Ustad Barkat Ali Khan and Mehdi Hasan marking their presence as trendsetters. Today Farida Khanum, Ghulam Ali and Abida Parveen are considered the iconic figures.",
    },
    {
      title: "Thumri ki kahani: Romance in Raag Form",
      content:
        "Thumri is one of the popular styles of singing in South Asia. It is described as a dance song in the 17th Century treatises like Raag Darpan and Tohfat-ul-Hind. With the passage of time, the dance element faded and now it is mostly presented by way of vocalization. Thumri was patronized by Nawab Wajid Ali Shah, the King of Lucknow who ruled the state of Avadh from 1847 to 1856. Technically speaking, this genre is a pleasant blend of our classical and semi-classical music. Unlike the classical forms of Dhrupad and Khayal, the Thumris are glorified with short amatory texts, mostly found in Brij Basha and its allied dialects like Avadhi, Bhojpuri etc. It has gained popularity due to excessive use of singing techniques like Khataka, Murki and Bol Bant. Here importance is given to eloquence rather than purity of a Raag. That is why Thumri is also known for its variations and experimentation with the structure of Raags. These days a Thumri is usually performed as a last item of the Khayal concert. Since not many Thumri singers are alive today, it is feared that this genre may become scarce soon. Before Thumri becomes completely non-existent, we need to make an endeavor for its revival by educating the present generation.",
    },
  ];

  const toggleContent = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(null); // Close any currently open tab first
      setTimeout(() => {
        setActiveIndex(index); // Open the new tab after a delay
      }, 300); // Adjust the delay to match your CSS transition duration
    }
  };

  return (
    <section className='AcaOffSec padSec'>
      <div className="container" style={{ marginTop: "7rem" }}>
        <div className="d-flex justify-content-center mb-5">
          <h2 className='globalHeading'>Academic Offerings</h2>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            {tabData.map((tab, index) => (
              <Tab
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

export default AcademicOfferings;
