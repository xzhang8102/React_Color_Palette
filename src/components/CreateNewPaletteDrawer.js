import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center'
  },
  drawerHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  container: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    width: '100%'
  },
  button: {
    width: '50%'
  },
  colorPicker: {
    marginTop: '1rem'
  },
  colorNameInput: {
    width: '100%'
  },
  addColorButton: {
    width: '100%',
    fontSize: '1.5rem',
    padding: '0.5rem',
    margin: '1rem 0'
  }
});

class CreateNewPaletteDrawer extends Component {
  state = {
    newColorName: '', // the name of the generated new color
    currentColor: '#aaaaaa' // color selected from the color picker
  };

  //add validator rule
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return this.props.palette.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule('isColorUnique', () =>
      this.props.palette.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // sync 'Add Color' button color with the color picker
  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  addNewColor = () => {
    const newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor
    };
    this.props.updatePalette(newColor);
    this.setState({
      newColorName: ''
    });
  };

  render() {
    const {
      classes,
      open,
      handleDrawer,
      clearPalette,
      palette,
      maxColorNums,
      addRandomColor
    } = this.props;
    const { currentColor, newColorName } = this.state;
    const paletteIsFull = palette.length >= maxColorNums;
    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearPalette}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              className={classes.button}
              disabled={paletteIsFull}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
            width="100%"
            className={classes.colorPicker}
          />
          <ValidatorForm onSubmit={this.addNewColor}>
            <TextValidator
              value={newColorName}
              name="newColorName"
              label="New Color Name"
              margin="normal"
              onChange={this.handleInputChange}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={[
                'This field is required',
                'The color name is already existed',
                'The color is already used'
              ]}
              autoComplete="off"
              className={classes.colorNameInput}
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: paletteIsFull ? '#bbbbbb' : currentColor
              }}
              type="submit"
              disabled={paletteIsFull}
              className={classes.addColorButton}
            >
              {paletteIsFull ? 'Palette Is Full' : 'Add Color'}
            </Button>
          </ValidatorForm>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(CreateNewPaletteDrawer);
