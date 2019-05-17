import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <>
        <h1>Palette List</h1>
        {palettes.map(palette => {
          return (
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          );
        })}
      </>
    );
  }
}

export default PaletteList;
