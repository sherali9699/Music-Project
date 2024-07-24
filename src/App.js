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
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/academic-offerings' element={<AcademicOfferings />} />
          <Route path='/music-room' element={<MusicRoom />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events-inner' element={<Events_Inner />} />
          <Route path='/students-works' element={<StudentWorks />} />
          <Route path='/intezaar-hussain' element={<Intizaar />} />
          <Route path='/khurshid-hussain' element={<Khurshid />} />
          <Route path='/sajid-hussain' element={<Sajid />} />
          <Route path='/shehroz-hussain' element={<Shehroz />} />
          <Route path='/islam-meer' element={<Islam />} />
          <Route path='/zohaib-hussain' element={<Zohaib/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
