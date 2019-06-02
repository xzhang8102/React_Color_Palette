import React from 'react';
import clsx from 'clsx';
import DraggableColorList from '../components/DraggableColorList';

class CreateNewPaletteContent extends React.Component {
  render() {
    const { classes, open, palette, removeColor, onSortEnd } = this.props;
    return (
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          palette={palette}
          removeColor={removeColor}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </main>
    );
  }
}

export default CreateNewPaletteContent;
