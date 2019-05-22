import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import PaletteNavBar from './PaletteNavBar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
  state = {
    format: 'hex'
  };

  changeFormat = val => {
    this.setState({ format: val });
  };

  gatherShade = (selectedColor, palette) => {
    const colorShades = [];
    const colors = palette.colors;
    for (let shade in colors) {
      colorShades.push(colors[shade].find(color => color.id === selectedColor));
    }
    return colorShades.slice(1);
  };

  render() {
    const { selectedColor, palette } = this.props;
    const colorShades = this.gatherShade(selectedColor, palette);
    const colorBoxes = colorShades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[this.state.format]}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <PaletteNavBar
          changeFormat={this.changeFormat}
          format={this.state.format}
          showSlider={false}
        />
        <div className="Palette-colors">
          <Link className="ColorBox" to={`/palette/${palette.id}`}>
            <button className="back-button">Back</button>
          </Link>
          {colorBoxes}
        </div>
        <PaletteFooter
          paletteName={palette.paletteName}
          emoji={palette.emoji}
        />
      </div>
    );
  }
}

export default SingleColorPalette;
