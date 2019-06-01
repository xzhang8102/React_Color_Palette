import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
//import styles from '../styles/CreateNewPaletteNavStyles';

const drawerWidth = 400;

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  navBtns: {}
});

class CreateNewPaletteNav extends Component {
  state = {
    newPaletteName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule(
      'isPaletteEmpty',
      () => this.props.palette.length
    );
  }

  handleInputChange = e => {
    this.setState({
      newPaletteName: e.target.value
    });
  };

  submitPalette = () => {
    let newPaletteName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/s+/g, '-'),
      emoji: '🤣',
      colors: this.props.palette
    };
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  };

  render() {
    const { classes, open, handleDrawer, history } = this.props;
    const { newPaletteName } = this.state;
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
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap>
              Create Your Own Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <ValidatorForm onSubmit={this.submitPalette}>
              <TextValidator
                label="New Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleInputChange}
                validators={['required', 'isPaletteUnique', 'isPaletteEmpty']}
                errorMessages={[
                  'This field is required',
                  'Name existed',
                  'Add some color in the palette first'
                ]}
                autoComplete="off"
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </ValidatorForm>
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
