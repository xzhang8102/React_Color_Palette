import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormatColorFill from '@material-ui/icons/FormatColorFill';
import styles from '../styles/CreateNewPaletteNavStyles';
import CreateNewPaletteForm from './CreateNewPaletteForm';

class CreateNewPaletteNav extends Component {
  state = {
    formOpen: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      formOpen: !prevState.formOpen
    }));
  };

  render() {
    const {
      classes,
      open,
      handleDrawer,
      history,
      palette,
      palettes,
      savePalette
    } = this.props;
    const { formOpen } = this.state;
    return (
      <>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawer}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <FormatColorFill />
            </IconButton>
            <Typography variant="h5" noWrap className={classes.title}>
              Create Your Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <CreateNewPaletteForm
              open={formOpen}
              handleClose={this.handleClick}
              palette={palette}
              palettes={palettes}
              savePalette={savePalette}
              history={history}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              Save
            </Button>
            <Button
              onClick={() => history.push('/')}
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </div>
        </AppBar>
      </>
    );
  }
}

export default withStyles(styles)(CreateNewPaletteNav);
