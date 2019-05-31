import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from '../components/MiniPalette';
import styles from '../styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Palette</h1>
            <Link to="/palette/new">Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => {
              return (
                <MiniPalette
                  key={palette.id}
                  {...palette}
                  handleClick={this.goToPalette}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);