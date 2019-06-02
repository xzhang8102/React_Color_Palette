import screenSizes from './screenSizes';

export default {
  root: {
    backgroundColor: '#03a2ec',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
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
    '& a': {
      color: 'white'
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
