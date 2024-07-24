import React from 'react';


function Tab({ title, content, isVisible, toggleContent }) {
    return (
      <div className="academic-common" onClick={toggleContent}>
        <div className="tab-header">
          <h3>{title}</h3>
          <span  id="spec">
            {isVisible ? '-' : '+'}
          </span>
        </div>
        <div id="tab" className={isVisible ? 'show' : 'hide'} >
        <p >
          {content}
        </p>
        </div>
      </div>
    );
  }

export default Tab;