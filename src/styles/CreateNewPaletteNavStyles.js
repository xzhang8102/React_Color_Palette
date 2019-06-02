import { DRAWER_WIDTH as drawerWidth } from '../constants';
import screenSizes from './screenSizes';

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  navBtns: {
    marginRight: '1rem',
    '& button': {
      marginLeft: '1rem'
    },
    [screenSizes.down('xs')]: {
      marginRight: '0.2rem',
      '& button': {
        marginLeft: '0.2rem'
      }
    }
  }
});

export default styles;
