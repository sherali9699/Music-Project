import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        
            <div id="arrowAnim" onClick={scrollToTop}>
            <div className="arrowSliding">
              <div className="arrow" />
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow" />
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow" />
            </div>
            <div className="arrowSliding delay3">
              <div className="arrow" />
            </div>
          </div>
        
      )}
    </div>
  );
};

export default ScrollToTopButton;
