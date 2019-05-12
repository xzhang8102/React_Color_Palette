import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, onSlide }) => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">Color Picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={500}
            min={100}
            max={900}
            step={100}
            onAfterChange={onSlide}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
