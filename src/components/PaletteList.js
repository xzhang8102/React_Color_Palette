import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <>
        <h1>Palette List</h1>
        {palettes.map(palette => {
          return <MiniPalette key={palette.id} {...palette} />;
        })}
      </>
    );
  }
}

export default PaletteList;
