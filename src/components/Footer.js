import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

//css
import '../assets/css/stylesheet.css';

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <ul className="d-flex justify-content-center mb-2">
          <li>
            <a href="https://www.facebook.com/HabibUniversity/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/csam.hu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        <p>
          <a href="mailto:music@habib.edu.pk" >music@habib.edu.pk</a>, 
          Habib University | Powered by <a href="https://habib.edu.pk/huit/" target="_blank" rel="noopener noreferrer" >HUIT</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
