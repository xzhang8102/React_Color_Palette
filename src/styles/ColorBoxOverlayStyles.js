import chroma from 'chroma-js';
import screenSizes from './screenSizes';

const styles = {
  copyOverlay: {
    opacity: '0',
    zIndex: '-1',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.5)'
    //   which starts as the center of the small box
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  overlayMsg: {
    color: props =>
      chroma(props.color).luminance() >= 0.608 ? 'rgba(0,0,0,0.7)' : 'white',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    right: '0',
    top: '0',
    left: '0',
    bottom: '0',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3rem',
    transform: 'scale(0.1)',
    opacity: '0',
    zIndex: '-1',
    '& h1': {
      fontWeight: '400',
      textShadow: props =>
        chroma(props.color).luminance() >= 0.608
          ? 'none'
          : '0.1rem 0.1rem rgba(0,0,0,0.7)',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '1rem',
      padding: '1rem',
      letterSpacing: '0.3rem',
      [screenSizes.down('xs')]: {
        fontSize: '5rem'
      }
    },
    '& p': {
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: '100',
      letterSpacing: '0.1rem'
    }
  },
  showOverlayMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '20',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.2s'
  }
};

export default styles;
