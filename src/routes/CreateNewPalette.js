import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import arrayMove from 'array-move';
import CreateNewPaletteNav from '../components/CreateNewPaletteNav';
import CreateNewPaletteDrawer from '../components/CreateNewPaletteDrawer';
import CreateNewPaletteContent from '../components/CreateNewPaletteContent';
import styles from '../styles/CreateNewPaletteStyles';

class CreateNewPalette extends React.Component {
  static defaultProps = {
    maxColorNums: 20
  };

  state = {
    open: false,
    newColorName: '', // the name of the generated new color
    currentColor: '#aaaaaa', // color selected from the color picker
    palette: this.props.palettes[0].colors // keep record of the user-generated color, {color: '', name: ''}
  };

  handleDrawer = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  // sync 'Add Color' button color with the color picker
  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  updatePalette = () => {
    const newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor
    };
    this.setState({
      palette: [...this.state.palette, newColor],
      newColorName: ''
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clearPalette = () => {
    this.setState({ palette: [] });
  };

  addRandomColor = () => {
    const allColors = this.props.palettes.map(palette => palette.colors).flat();
    const unique = new Set(this.state.palette.map(color => color.name));
    let rand;
    do {
      rand = Math.round(Math.random() * (allColors.length - 1));
    } while (unique.has(allColors[rand].name));
    this.setState({
      palette: [...this.state.palette, allColors[rand]]
    });
  };

  removeColor = colorName => {
    this.setState({
      palette: this.state.palette.filter(
        color => color.name.toLowerCase() !== colorName.toLowerCase()
      )
    });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(prevState => ({
      palette: arrayMove(prevState.palette, oldIndex, newIndex)
    }));
  };

  render() {
    const { classes, maxColorNums, palettes } = this.props;
    const { open, currentColor, palette, newColorName } = this.state;
    return (
      <div className={classes.root}>
        <CreateNewPaletteNav
          open={open}
          classes={classes}
          handleDrawer={this.handleDrawer}
          palette={palette}
          palettes={palettes}
          history={this.props.history}
          savePalette={this.props.savePalette}
        />
        <CreateNewPaletteDrawer
          open={open}
          classes={classes}
          maxColorNums={maxColorNums}
          palette={palette}
          palettes={palettes}
          currentColor={currentColor}
          newColorName={newColorName}
          handleDrawer={this.handleDrawer}
          clearPalette={this.clearPalette}
          addRandomColor={this.addRandomColor}
          handleInputChange={this.handleInputChange}
          updateCurrentColor={this.updateCurrentColor}
          updatePalette={this.updatePalette}
        />
        <CreateNewPaletteContent
          open={open}
          classes={classes}
          palette={palette}
          removeColor={this.removeColor}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}

export default withStyles(styles)(CreateNewPalette);
