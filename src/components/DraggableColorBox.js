import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import chroma from 'chroma-js';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    position: 'relative',
    display: 'inline-block',
    cursor: 'move'
  },
  boxContent: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '0.25rem 0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08rem',
    fontSize: '0.8rem',
    color: props =>
      chroma(props.color).luminance() <= 0.066 ? 'white' : 'rgba(0,0,0,0.7)',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      color: 'white',
      transform: 'scale(1.4)',
      cursor: 'pointer'
    }
  }
};

const DraggableColorBox = SortableElement(
  ({ classes, color, name, removeColor }) => {
    return (
      <div style={{ backgroundColor: color }} className={classes.root}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <DeleteOutlinedIcon
            className={classes.deleteIcon}
            onClick={() => removeColor(name)}
          />
        </div>
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorBox);
