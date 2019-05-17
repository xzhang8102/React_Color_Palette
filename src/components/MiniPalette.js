import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'white',
    borderRadius: '.5rem',
    padding: '0.8rem',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid black',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  snapShot: {
    backgroundColor: 'grey'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    paddingTop: '0.8rem',
    fontSize: '1.5rem'
  },
  emoji: {
    marginLeft: '0.8rem',
    fontSize: '2rem'
  }
};

const MiniPalette = props => {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.snapShot} />
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
