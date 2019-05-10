import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ColorBoxOverlay from './ColorBoxOverlay';
import '../styles/ColorBox.css';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.onCopied = this.onCopied.bind(this);
  }
  onCopied() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background} onCopy={this.onCopied}>
        <div style={{ background }} className="ColorBox">
          <ColorBoxOverlay copied={this.state.copied} color={background} />
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">COPY</button>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
