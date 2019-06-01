import chroma from 'chroma-js';
import screenSizes from './screenSizes';

const styles = {
  colorBox: {
    width: '20%',
    height: props => (props.detailedUrl ? '25%' : '50%'),
    position: 'relative',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    '&:hover': {
      top: '-0.5rem',
      left: '-0.5rem',
      boxShadow: '0.3rem 0.3rem 0.1rem grey'
    },
    '&:hover button': {
      opacity: '1',
      transition: '0.5s'
    },
    [screenSizes.down('lg')]: {
      width: '25%',
      height: props => (props.detailedUrl ? '20%' : '50%')
    },
    [screenSizes.down('md')]: {
      width: '50%',
      height: props => (props.detailedUrl ? '10%' : '50%')
    },
    [screenSizes.down('sm')]: {
      width: '100%',
      height: props => (props.detailedUrl ? '5%' : '50%')
    }
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.066
        ? 'white'
        : 'rgba(0,0,0,0.7)',
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '0.6rem',
    letterSpacing: '0.08rem',
    fontSize: '0.8rem'
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.608
        ? 'rgba(0,0,0,0.7)'
        : 'white',
    width: '10rem',
    height: '3rem',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255, 255, 255, 0.3)',
    outline: 'none',
    fontSize: '1.4rem',
    border: 'none',
    opacity: '0',
    cursor: 'pointer',
    backfaceVisibility: 'hidden'
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.608
        ? 'rgba(0,0,0,0.7)'
        : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    right: '0',
    bottom: '0',
    padding: '0.6rem 1.2rem',
    textAlign: 'center',
    fontSize: '0.8rem'
  }
};

export default styles;
