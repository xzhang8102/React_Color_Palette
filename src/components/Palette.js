import React from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

class Palette extends React.Component {
  render() {
    const colorBoxList = this.props.colors.map((color, i) => {
      return <ColorBox key={i} background={color.color} name={color.name} />;
    });

    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxList}</div>
      </div>
    );
  }
}

export default Palette;
