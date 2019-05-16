import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import 'rc-slider/assets/index.css';
import '../styles/PaletteNavBar.css';

const PaletteNavBar = ({ level, onSlide, changeFormat, format }) => {
  // set the switch for the format selector
  const [open, setOpen] = useState(false);

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
        <Select
          value={format}
          onChange={e => {
            changeFormat(e.target.value);
            setOpen(true);
          }}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={1500}
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()}</span>
        }
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        onClose={() => setOpen(false)}
        action={[
          <IconButton
            onClick={() => setOpen(false)}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <Close />
          </IconButton>
        ]}
      />
    </nav>
  );
};

export default PaletteNavBar;
