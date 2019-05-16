import React from 'react';
import '../styles/PaletteFooter.css';

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
