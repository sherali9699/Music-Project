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
import Footer from './components/Footer'
import './App.css'  


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/music/' element={<Home />} />
          <Route path='music/about/' element={<About />} />
          <Route path='music/academic-offerings/' element={<AcademicOfferings />} />
          <Route path='music/music-room/' element={<MusicRoom />} />
          <Route path='music/events/' element={<Events />} />
          <Route path='/events-inner' element={<Events_Inner />} />
          <Route path='music/student-works/' element={<StudentWorks />} />
          <Route path='/music/intezar-hussain-vocal-instructor/' element={<Intizaar />} />
          <Route path='/music/ustad-khursheed/' element={<Khurshid />} />
          <Route path='/music/ustad-sajid-hussain/' element={<Sajid />} />
          <Route path='/music/shehroze-hussain-sitar-instructor/' element={<Shehroz />} />
          <Route path='/music/islam-uddin-mir/' element={<Islam />} />
          <Route path='/music/zohaib-khursheed-hussain-tabla-instructor/' element={<Zohaib/>} />
          <Route path='music/contact/' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
