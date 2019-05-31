const styles = theme => ({
  drawer: {
    width: props => props.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: props => props.drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
});

export default styles;
