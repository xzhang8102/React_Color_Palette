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
    margin: '0 1rem'
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
  },
  messageId: {
    fontSize: '1.1rem'
  }
};

export default styles;
