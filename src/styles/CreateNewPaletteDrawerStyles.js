import { DRAWER_WIDTH as drawerWidth } from '../constants';
import screenSizes from './screenSizes';

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [screenSizes.down('sm')]: {
      width: drawerWidth - 150
    }
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center',
    [screenSizes.down('sm')]: {
      width: drawerWidth - 150
    }
  },
  drawerHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  container: {
    width: '80%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    width: '100%'
  },
  button: {
    width: '50%'
  },
  colorPicker: {
    marginTop: '1rem'
  },
  colorNameInput: {
    width: '100%'
  },
  addColorButton: {
    width: '100%',
    fontSize: '1.5rem',
    padding: '0.5rem',
    margin: '1rem 0'
  }
});

export default styles;
