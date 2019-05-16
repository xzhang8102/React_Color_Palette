import React from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import '../styles/Palette.css';

class Palette extends React.Component {
  state = {
    level: 500,
    format: 'hex'
  };

  onSlide = level => {
    this.setState({ level });
  };

  changeFormat = e => {
    this.setState({ format: e.target.value });
  };

  render() {
    const colorBoxList = this.props.palette.colors[this.state.level].map(
      (color, i) => {
        return (
          <ColorBox
            key={i}
            background={color[this.state.format]}
            name={color.name}
          />
        );
      }
    );

    return (
      <div className="Palette">
        <NavBar
          onSlide={this.onSlide}
          level={this.state.level}
          changeFormat={this.changeFormat}
          format={this.state.format}
        />
        <div className="Palette-colors">{colorBoxList}</div>
      </div>
    );
  }
}

export default Palette;
