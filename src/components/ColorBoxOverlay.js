import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ColorBoxOverlayStyles';

const ColorBoxOverLay = ({ copied, color, classes }) => {
  return (
    <>
      <div
        style={{ background: color }}
        className={`${classes.copyOverlay} ${
          copied ? classes.showOverlay : undefined
        }`}
      />
      <div
        className={`${classes.overlayMsg} ${
          copied ? classes.showOverlayMsg : undefined
        }`}
      >
        <h1>COPIED</h1>
        <p>{color}</p>
      </div>
    </>
  );
};

export default withStyles(styles)(ColorBoxOverLay);
