import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = props => {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    handleClick,
    id,
    deletePalette
  } = props;
  const miniColorBoxes = colors.map(color => {
    return (
      <div
        className={classes.miniColor}
        key={color.name}
        style={{ backgroundColor: color.color }}
      />
    );
  });
  const onDelete = e => {
    e.stopPropagation();
    deletePalette(id);
  };
  return (
    <div className={classes.root} onClick={() => handleClick(id)}>
      <div className={classes.delete} onClick={onDelete}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.snapShot}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
