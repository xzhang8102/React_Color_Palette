const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  logo: {
    marginRight: '1.5rem',
    padding: '0 1.3rem',
    fontSize: '1.8rem',
    backgroundColor: '#eceff1',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    }
  },
  sliderContainer: {
    fontSize: '1.2rem',
    fontFamily: 'Roboto',
    fontWeight: '200'
  },
  slider: {
    width: '30rem',
    display: 'inline-block',
    margin: '0 1rem',
    '& .rc-slider-track': {
      background: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '0.8rem',
      marginTop: '-0.1rem'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
      background: 'green',
      outline: 'none',
      border: '0.2rem solid green',
      boxShadow: 'none',
      width: '1.2rem',
      height: '1.2rem',
      marginTop: '-0.3rem'
    }
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
};

export default styles;
