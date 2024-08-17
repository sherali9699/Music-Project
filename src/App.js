import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing components
import Header from './components/header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

// importing main pages
import Home from './pages/home';
import About from './pages/about';
import AcademicOfferings from './pages/academic-offerings';
import MusicRoom from './pages/music-room';
import Events from './pages/events';
import StudentWorks from './pages/student-works';
import Contact from './pages/contact';

// importing instructor pages 
import Intizaar from './pages/intezaar';
import Sajid from './pages/sajjid';
import Khurshid from './pages/khurshid';
import Islam from './pages/islamuddin';
import Shehroz from './pages/shehroz';
import Zohaib from './pages/zohaib';

// importing events pages
import Ev1 from './events/ev1';
import Ev2 from './events/ev2';
import Ev3 from './events/ev3';
import Ev4 from './events/ev4';
import Ev5 from './events/ev5';
import Ev6 from './events/ev6';
import Ev7 from './events/ev7';
import Ev8 from './events/ev8';
import Ev9 from './events/ev9';
import Ev10 from './events/ev10';
import Ev11 from './events/ev11';
import Ev12 from './events/ev12';
import Ev13 from './events/ev13';
import Ev14 from './events/ev14';
import Ev15 from './events/ev15';
import Ev16 from './events/ev16';
import Ev17 from './events/ev17';
import Ev18 from './events/ev18';
import Ev19 from './events/ev19';
import Ev20 from './events/ev20';
import Ev21 from './events/ev21';
import Ev22 from './events/ev22';
import Ev23 from './events/ev23';
import Ev24 from './events/ev24';
import Ev25 from './events/ev25';
import Ev26 from './events/ev26';
import Ev27 from './events/ev27';
import Ev28 from './events/ev28';
import Ev29 from './events/ev29';
import Ev30 from './events/ev30';
import Ev31 from './events/ev31';
import Ev32 from './events/ev32';
import Ev33 from './events/ev33';
import Ev34 from './events/ev34';


import './App.css';
import './assets/css/stylesheet.css';
import './assets/css/responsive.css';

function App() {
  return (
    <div className="App">
      <Router basename={'/dev-music'}>
      {/* <BrowserRouter>  */}
      <ScrollToTop />
        <Header />
        <Routes>
          {/* main pages routes */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/academic-offerings' element={<AcademicOfferings />} />
          <Route path='/music-room' element={<MusicRoom />} />
          <Route path='/events' element={<Events />} />
          <Route path='/student-works' element={<StudentWorks />} />
          <Route path='/contact' element={<Contact />} />

          {/* insructors pages routes */}
          <Route path='/music-room/intezar-hussain-vocal-instructor' element={<Intizaar />} />
          <Route path='/music-room/ustad-khursheed' element={<Khurshid />} />
          <Route path='/music-room/ustad-sajid-hussain' element={<Sajid />} />
          <Route path='/music-room/shehroze-hussain-sitar-instructor' element={<Shehroz />} />
          <Route path='/music-room/islam-uddin-mir' element={<Islam />} />
          <Route path='/music-room/zohaib-khursheed-hussain-tabla-instructor' element={<Zohaib />} />

          {/* events pages routes */}
          <Route path='/events/andaaz-the-dance-concert-30-nov-2018' element={<Ev1 />} />
          <Route path='/events/drum-circle-welcoming-spring-17-jan-2019' element={<Ev2 />} />
          <Route path='/events/raag-time-05-mar-2019' element={<Ev3 />} />
          <Route path='/events/awards-night-14-june-2019' element={<Ev4 />} />
          <Route path='/events/week-of-welcome-musical-evening-30-aug-2019' element={<Ev5 />} />
          <Route path='/events/week-of-welcome-musical-evening-12-mar-2021' element={<Ev6 />} />
          <Route path='/events/khayal-imagination-in-sound-16-nov-2021' element={<Ev7 />} />
          <Route path='/events/khayal-imagination-in-sound-22-feb-2022' element={<Ev8 />} />
          <Route path='/events/khayal-imagination-in-sound-08-mar-2022' element={<Ev9 />} />
          <Route path='/events/khayal-imagination-in-sound-17-mar-2022' element={<Ev10 />} />
          <Route path='/events/nazaakat-aur-taakat-25-mar-2022' element={<Ev11 />} />
          <Route path='/events/awards-night-02-june-2022' element={<Ev12 />} />
          <Route path='/events/the-science-of-tabla-sound-a-talk-by-dr-abdullah-khalid-09-june-2022' element={<Ev13 />} />
          <Route path='/events/week-of-welcome-musical-evening-22-sept-2022' element={<Ev14 />} />
          <Route path='/events/musicking-through-makran-with-ustad-noor-baksh-30-sept-2022' element={<Ev15 />} />
          <Route path='/events/ghazal-kay-rang-11-oct-2022' element={<Ev16 />} />
          <Route path='/events/khursheed-e-fann-11-nov-2022' element={<Ev17 />} />
          <Route path='/events/baithak-with-ustad-badar-uz-zaman-28-nov-2022' element={<Ev18 />} />
          <Route path='/events/listening-through-the-times-with-nizar-lalani-26-jan-2023' element={<Ev19 />} />
          <Route path='/events/khayal-imagination-in-sound-16-feb-2023' element={<Ev20 />} />
          <Route path='/events/khayal-imagination-in-sound-28-feb-2023' element={<Ev21 />} />
          <Route path='/events/vocals-lecture-demo-with-muslim-shaggan-07-mar-2023' element={<Ev22 />} />
          <Route path='/events/ghazal-kay-rang-09-mar-2023' element={<Ev23 />} />
          <Route path='/events/awards-night-25-may-2023' element={<Ev24 />} />
          <Route path='/events/karoonjhar-mountains-world-heritage-site-or-granite-reserve-19-oct-2023' element={<Ev25 />} />
          <Route path='/events/ghazal-kay-rang-26-oct-2023' element={<Ev26 />} />
          <Route path='/events/campus-visit-ustad-shafqat-ali-khan-27-nov-2023' element={<Ev27 />} />
          <Route path='/events/ghazal-kay-rang-25-jan-2024' element={<Ev28 />} />
          <Route path='/events/khayal-imagination-in-sound-13-feb-2024' element={<Ev29 />} />
          <Route path='/events/khayal-se-ghazal-tak-27-feb-2024' element={<Ev30 />} />
          <Route path='/events/bansuri-workshop-with-ustad-hanif-khan-29-feb-2024' element={<Ev31 />} />
          <Route path='/events/the-evolution-of-khayal-05-mar-2024' element={<Ev32 />} />
          <Route path='/events/echoes-of-tradition-the-art-of-tabla-solo-with-ustad-shahbaz-hussain-07-mar-2024' element={<Ev33 />} />
          <Route path='/events/awards-night-30-may-2024' element={<Ev34 />} />


        </Routes>
        <Footer />
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
