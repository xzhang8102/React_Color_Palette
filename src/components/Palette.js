import React from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';
import PaletteNavBar from './PaletteNavBar';
import PaletteFooter from './PaletteFooter';

class Palette extends React.Component {
  state = {
    level: 500,
    format: 'hex'
  };

  onSlide = level => {
    this.setState({ level });
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const colorBoxList = colors[this.state.level].map(color => {
      return (
        <ColorBox
          key={color.id}
          background={color[this.state.format]}
          name={color.name}
          detailedUrl={`/palette/${id}/${color.id}`}
        />
      );
    });

    return (
      <div className={classes.palette}>
        <PaletteNavBar
          onSlide={this.onSlide}
          level={this.state.level}
          changeFormat={this.changeFormat}
          format={this.state.format}
          showSlider
        />
        <div className={classes.paletteColors}>{colorBoxList}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
