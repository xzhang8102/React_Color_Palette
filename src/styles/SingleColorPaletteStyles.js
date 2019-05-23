import PaletteStyles from './PaletteStyles';

const styles = {
  ...PaletteStyles,
  backBox: {
    width: '20%',
    height: '50%',
    position: 'relative',
    cursor: 'pointer',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    '&:hover': {
      top: '-0.5rem',
      left: '-0.5rem',
      boxShadow: '0.3rem 0.3rem 0.1rem grey'
    }
  },
  backButton: {
    width: '10rem',
    height: '3rem',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#d6d6d6',
    outline: 'none',
    fontSize: '1.4rem',
    border: 'none',
    opacity: '1',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white'
  }
};

export default styles;
