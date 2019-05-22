import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import ColorBoxOverlay from './ColorBoxOverlay';
import '../styles/ColorBox.css';

const ColorBox = ({ name, background, detailedUrl }) => {
  const [copied, setCopied] = useState(false);

  const onCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isDark = chroma(background).luminance() <= 0.066;
  const isLight = chroma(background).luminance() >= 0.608;

  return (
    <CopyToClipboard text={background} onCopy={onCopied}>
      <div style={{ background }} className="ColorBox">
        <ColorBoxOverlay copied={copied} color={background} />
        <div className="box-content">
          <span className={isDark ? 'light-text' : undefined}>{name}</span>
        </div>
        <button className={`copy-button ${isLight ? 'dark-text' : undefined}`}>
          COPY
        </button>
        {detailedUrl && (
          <Link to={detailedUrl} onClick={e => e.stopPropagation()}>
            <span className={`see-more ${isLight ? 'dark-text' : undefined}`}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
