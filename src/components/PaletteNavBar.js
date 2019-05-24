import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Snackbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Close } from '@material-ui/icons';
import 'rc-slider/assets/index.css';
import styles from '../styles/PaletteNavBarStyles';

const PaletteNavBar = ({
  level,
  onSlide,
  changeFormat,
  format,
  showSlider,
  classes
}) => {
  // set the switch for the format selector
  const [open, setOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">Palette List</Link>
      </div>
      {showSlider && (
        <div className={classes.sliderContainer}>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={500}
              min={100}
              max={900}
              step={100}
              onAfterChange={onSlide}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
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
          <span id="message-id" style={{ fontSize: '1.1rem' }}>
            Format Changed To {format.toUpperCase()}
          </span>
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

export default withStyles(styles)(PaletteNavBar);
