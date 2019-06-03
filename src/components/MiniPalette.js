import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/MiniPaletteStyles';

class MiniPalette extends React.PureComponent {
  state = {
    open: false
  };

  openDialog = e => {
    e.stopPropagation();
    this.setState({ open: true });
  };

  hideDialog = () => {
    this.setState({ open: false });
  };

  handleDelete = () => {
    this.props.deletePalette(this.props.id);
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes, paletteName, emoji, colors, handleClick, id } = this.props;
    const miniColorBoxes = colors.map(color => {
      return (
        <div
          className={classes.miniColor}
          key={color.name}
          style={{ backgroundColor: color.color }}
        />
      );
    });
    return (
      <>
        <div className={classes.root} onClick={() => handleClick(id)}>
          <div className={classes.delete} onClick={this.openDialog}>
            <DeleteIcon className={classes.deleteIcon} />
          </div>
          <div className={classes.snapShot}>{miniColorBoxes}</div>
          <h5 className={classes.title}>
            {paletteName} <span className={classes.emoji}>{emoji}</span>
          </h5>
        </div>
        <Dialog
          open={open}
          onClose={this.hideDialog}
          aria-labelledby="alert-dialog-title"
        >
          <DialogTitle id="alert-dialog-title">
            Are you sure to delete this palette?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.hideDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="secondary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default withStyles(styles)(MiniPalette);
