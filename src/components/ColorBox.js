import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ColorBoxOverlay from './ColorBoxOverlay';
import styles from '../styles/ColorBoxStyles';

const ColorBox = ({ name, background, detailedUrl, classes }) => {
  const [copied, setCopied] = useState(false);

  const onCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // const isDark = chroma(background).luminance() <= 0.066;
  // const isLight = chroma(background).luminance() >= 0.608;

  return (
    <CopyToClipboard text={background} onCopy={onCopied}>
      <div style={{ background }} className={classes.colorBox}>
        <ColorBoxOverlay copied={copied} color={background} />
        <div className={classes.colorName}>
          <span>{name}</span>
        </div>
        <button className={classes.copyButton}>COPY</button>
        {detailedUrl && (
          <Link to={detailedUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
