import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import ColorBoxOverlay from './ColorBoxOverlay';
import '../styles/ColorBox.css';

const ColorBox = ({ name, background, detailedUrl }) => {
  const [copied, setCopied] = useState(false);

  const onCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={onCopied}>
      <div style={{ background }} className="ColorBox">
        <ColorBoxOverlay copied={copied} color={background} />
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">COPY</button>
        {detailedUrl && (
          <Link to={detailedUrl} onClick={e => e.stopPropagation()}>
            <span className="see-more">More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
