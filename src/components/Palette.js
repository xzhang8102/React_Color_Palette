import React from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import '../styles/Palette.css';

class Palette extends React.Component {
  state = {
    level: 500
  };

  onSlide = level => {
    this.setState({ level });
  };

  render() {
    const colorBoxList = this.props.palette.colors[this.state.level].map(
      (color, i) => {
        return <ColorBox key={i} background={color.hex} name={color.name} />;
      }
    );

    return (
      <div className="Palette">
        <NavBar onSlide={this.onSlide} level={this.state.level} />
        <div className="Palette-colors">{colorBoxList}</div>
      </div>
    );
  }
}

export default Palette;
