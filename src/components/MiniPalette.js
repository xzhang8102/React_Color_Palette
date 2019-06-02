import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/MiniPaletteStyles';

const MiniPalette = props => {
  const [open, setOpen] = useState(false);
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

  function openDialog(e) {
    e.stopPropagation();
    setOpen(true);
  }

  function handleDelete() {
    deletePalette(id);
    setOpen(false);
  }

  return (
    <>
      <div className={classes.root} onClick={() => handleClick(id)}>
        <div className={classes.delete} onClick={openDialog}>
          <DeleteIcon className={classes.deleteIcon} />
        </div>
        <div className={classes.snapShot}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure to delete this palette?
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(MiniPalette);
