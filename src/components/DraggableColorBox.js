import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    height: '25%',
    width: '20%',
    position: 'relative',
    display: 'inline-block'
  }
};

const DraggableColorBox = props => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={props.classes.root}
    >
      <h4>{props.name}</h4>
    </div>
  );
};

export default withStyles(styles)(DraggableColorBox);
