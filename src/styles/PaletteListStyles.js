import screenSizes from './screenSizes';
import bg from './paletteListBackground.svg';

export default {
  root: {
    backgroundColor: '#394bad',
    backgroundImage: `url(${bg})`,
    height: '100vh',
    overflow: 'scroll',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
    // background by SVGBackgrounds.com
  },
  container: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [screenSizes.down('xl')]: {
      width: '60%'
    },
    [screenSizes.down('lg')]: {
      width: '65%'
    },
    [screenSizes.down('xs')]: {
      width: '50%'
    }
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    color: 'white',
    padding: '1rem 1.3rem 1rem 0',
    '& h1': {
      fontSize: '1.8rem'
    },
    '& a': {
      fontSize: '1.2rem',
      color: 'white',
      padding: '0.6rem',
      textDecoration: 'none',
      border: '0.1rem solid white',
      borderRadius: '0.2rem'
    }
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.5rem',
    [screenSizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)',
      gridGap: '3rem'
    },
    [screenSizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.5rem'
    }
  }
};
