import React from 'react';
import '../styles/ColorBoxOverlay.css';

const ColorBoxOverLay = ({ copied, color }) => {
  return (
    <>
      <div style={{ background: color }} className={`copy-overlay ${copied && 'show'}`} />
      <div className={`overlay-msg ${copied && 'show'}`}>
        <h1>COPIED</h1>
        <p>{color}</p>
      </div>
    </>
  );
};

export default ColorBoxOverLay;
