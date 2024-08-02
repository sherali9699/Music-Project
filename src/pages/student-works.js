import React from "react";
import { Helmet } from 'react-helmet';

// import "..//assets/css/stylesheet.css";

//images
import im1 from "..//assets/images/students-work/students-work1.webp";
import im2 from "..//assets/images/students-work/students-work2.webp";
import im3 from "..//assets/images/students-work/students-work3.webp";
import im4 from "..//assets/images/students-work/students-work4.webp";
import im5 from "..//assets/images/students-work/students-work5.webp";
import im6 from "..//assets/images/students-work/students-work6.webp";
import im7 from "..//assets/images/students-work/students-work7.webp";
import im8 from "..//assets/images/students-work/students-work8.webp";

const StudentWorks = () => {
  return (
    <>
      <Helmet>
        <title>Student Works - Center for South Asian Music</title>
      </Helmet>

    <span className='innerPageBlock'></span>
    <section className='mrSec padSec top'>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <div className='globalHeadingWrap'>
            <h2 className='globalHeading'>Students' Work</h2>
          </div>
        </div>
      </div>
      <ul className="gridviewBox">
            <a href="https://drive.google.com/drive/folders/1jUcMF_b1IoE0T--FIu6lspvP0rwwJcfK" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im1} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Lughat-e-Besur</h3>
                  <h4>By Anita Zehra</h4>
                </div>
              </div>
            </div>
            </a>
            <a href="https://read.bookcreator.com/xILLDl6IkWQBKGw9aZnZdSxgNv13/lY2IncmUQ5myZgtIGgZdUA/aK63JdgMTnKFYKQs_mWIzA" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im2} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Sarangi: The instrument and the Art</h3>
                  <h4>By Aala Masood</h4>
                </div>
              </div>
            </div>
            </a>
            <a href="https://ayizarahman.wixsite.com/sitar" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im3} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Evolution of Sitaar</h3>
                  <h4>website by Ayiza Rehman</h4>
                </div>
              </div>
            </div>
            </a>
            <a href="https://drive.google.com/drive/folders/17fdj_gfEtiAthsHQSF_io8CVo0Bp5Ce9" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im4} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Representation of SA musical devices</h3>
                  <h4>by Fariha Kidwai</h4>
                </div>
              </div>
            </div>
            </a>
            <a href="https://habib.edu.pk/music/wp-content/uploads/2021/01/Paper-on-Gauhar-jaan-by-Syeda-Armeen.pdf" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im5} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Paper on Gauhar Jaan</h3>
                  <h4>by Syeda Armeen</h4>
                </div>
              </div>
            </div>
            </a>
            <a href="https://drive.google.com/drive/folders/1mILLd89Y4C9f2wRF4PWSW7jr5d8OrQPC" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im6} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                <h3>Composition of a Kalaam</h3>
                <h4>By Shehryar</h4>
                </div>
              </div>
            </div>
            </a>
            <a href="https://doodhjalebi.github.io/Taal-Tutor/" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im7} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Taal Tutor </h3>
                  <h4>By Owais bin Asad</h4>
                </div>
              </div>
            </div>
            </a>
            <a href="https://musicofsouthasiaproject.weebly.com/stories.html" target="_blank" rel="noopener noreferrer">
            <div className="hoverImgBox">
              <div className="InnerWraperImg">
                <div className="imgWrap">
                  <img src={im8} alt="Khayal concert event" />
                </div>
                <div className="overImgText">
                  <h3>Mosa Space</h3>
                  <h4>by Abeer Ahmed, Maryam Ahmed & Maham Insha</h4>
                </div>
              </div>
            </div>
            </a>
          </ul>
    </div>
  </section>
  </>
  );
};

export default StudentWorks;
