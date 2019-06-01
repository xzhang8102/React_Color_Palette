export default {
  root: {
    backgroundColor: 'white',
    borderRadius: '.5rem',
    position: 'relative',
    overflow: 'hidden',
    padding: '0.8rem 0.8rem 0 0.8rem',
    cursor: 'pointer',
    '&:hover $delete': {
      opacity: 1
    }
  },
  snapShot: {
    backgroundColor: '#dae1e4',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    height: '10rem',
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
    padding: '0.1rem 0',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    fontFamily: 'Roboto'
  },
  emoji: {
    marginLeft: '0.8rem',
    fontSize: '1.6rem'
  },
  delete: {
    opacity: 0,
    transition: 'all 0.3s ease-in-out'
  },
  deleteIcon: {
    color: 'white',
    backgroundColor: '#eb3d30',
    width: '2rem',
    height: '2rem',
    padding: '.3rem',
    zIndex: 20,
    position: 'absolute',
    right: 0,
    top: 0
  }
};
