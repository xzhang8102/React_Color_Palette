import React from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@material-ui/core';

import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, onSlide, changeFormat, format }) => {
  return (
    <nav className="Navbar">
      <div className="logo">Color Picker</div>
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
      <div className="select-container">
        <Select value={format} onChange={changeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    </nav>
  );
};

export default NavBar;
