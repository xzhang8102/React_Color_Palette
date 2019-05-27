import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DraggableColorBox from './DraggableColorBox';

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  }
};

const DraggableColorList = SortableContainer(
  ({ classes, palette, removeColor }) => {
    return (
      <div className={classes.root}>
        {palette.map((color, i) => {
          return (
            <DraggableColorBox
              index={i}
              {...color}
              key={color.name}
              removeColor={removeColor}
            />
          );
        })}
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorList);
