export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '.5rem',
    padding: '0.8rem',
    border: '1px solid black',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  snapShot: {
    backgroundColor: '#dae1e4',
    display: 'flex',
    flexWrap: 'wrap',
    height: '13rem',
    width: '100%',
    borderRadius: '0.5rem',
    overflow: 'hidden' //to show the round border of this container
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    padding: '0.5rem 0 0 0',
    fontSize: '1.2rem',
    fontWeight: '500'
  },
  emoji: {
    marginLeft: '0.8rem',
    fontSize: '1.6rem'
  }
};
