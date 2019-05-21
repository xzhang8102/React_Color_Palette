import React, { Component } from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

class SingleColorPalette extends Component {
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
      <ColorBox key={color.name} name={color.name} background={color.hex} />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors" style={{ alignContent: 'flex-start' }}>
          {colorBoxes}
        </div>
      </div>
    );
  }
}

export default SingleColorPalette;
