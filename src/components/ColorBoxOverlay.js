import React from 'react';
import chroma from 'chroma-js';
import '../styles/ColorBoxOverlay.css';

const ColorBoxOverLay = ({ copied, color }) => {
  const isLight = chroma(color).luminance() >= 0.608;

  return (
    <>
      <div
        style={{ background: color }}
        className={`copy-overlay ${copied && 'show'}`}
      />
      <div className={`overlay-msg ${copied && 'show'}`}>
        <h1 className={isLight ? 'dark-text' : undefined}>COPIED</h1>
        <p className={isLight ? 'dark-text' : undefined}>{color}</p>
      </div>
    </>
  );
};

export default ColorBoxOverLay;
