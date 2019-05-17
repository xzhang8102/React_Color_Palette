import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
  root: {
    backgroundColor: 'blue',
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirecetion: 'column',
    flexWrap: 'wrap'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    color: 'white'
  },
  palettes: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%',
    '& a': {
      textDecoration: 'none'
    }
  }
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Palette</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => {
              return (
                <Link key={palette.id} to={`/palette/${palette.id}`}>
                  <MiniPalette {...palette} />{' '}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
