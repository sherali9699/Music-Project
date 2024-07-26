import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import AcademicOfferings from './pages/academic-offerings';
import MusicRoom from './pages/music-room';
import Events from './pages/events';
import Events_Inner from './pages/inner-page';
import StudentWorks from './pages/student-works';
import Intizaar from './pages/intezaar';
import Sajid from './pages/sajjid';
import Khurshid from './pages/khurshid';
import Islam from './pages/islamuddin';
import Shehroz from './pages/shehroz';
import Zohaib from './pages/zohaib';
import Contact from './pages/contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 
import ScrollToTopButton from './components/ScrollToTopBtn';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop /> 
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/academic-offerings' element={<AcademicOfferings />} />
          <Route path='/music-room' element={<MusicRoom />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events-inner' element={<Events_Inner />} />
          <Route path='/student-works' element={<StudentWorks />} />
          <Route path='/intezar-hussain-vocal-instructor' element={<Intizaar />} />
          <Route path='/ustad-khursheed' element={<Khurshid />} />
          <Route path='/ustad-sajid-hussain' element={<Sajid />} />
          <Route path='/shehroze-hussain-sitar-instructor' element={<Shehroz />} />
          <Route path='/islam-uddin-mir' element={<Islam />} />
          <Route path='/zohaib-khursheed-hussain-tabla-instructor' element={<Zohaib />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <ScrollToTopButton /> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
