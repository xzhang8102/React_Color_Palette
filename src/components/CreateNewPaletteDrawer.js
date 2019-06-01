import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <Button variant="contained" color="secondary" onClick={clearPalette}>
          Clear Palette
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={addRandomColor}
          disabled={paletteIsFull}
        >
          Random Color
        </Button>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.addNewColor}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleInputChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'This field is required',
              'The color name is already existed',
              'The color is already used'
            ]}
            autoComplete="off"
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: paletteIsFull ? '#bbbbbb' : currentColor
            }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? 'Palette Is Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </Drawer>
    );
  }
}

export default CreateNewPaletteDrawer;
