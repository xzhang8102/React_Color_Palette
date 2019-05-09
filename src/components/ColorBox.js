import React, { Component } from 'react';
import '../styles/ColorBox.css';

class ColorBox extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.background }}
        className="ColorBox"
      >
        <span>{this.props.name}</span>
        <span>More...</span>
      </div>
    );
  }
}

export default ColorBox;
