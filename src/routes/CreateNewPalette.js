import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import arrayMove from 'array-move';
import DraggableColorList from '../components/DraggableColorList';

const drawerWidth = 400;

const styles = theme => {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
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
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end'
    },
    content: {
      flexGrow: 1,
      height: 'calc(100vh - 64px)', // minus the appbar height
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  };
};

class CreateNewPalette extends React.Component {
  static defaultProps = {
    maxColorNums: 20
  };

  state = {
    open: false,
    newColorName: '', // the name of the generated new color
    currentColor: '#cccccc', // color selected from the color picker
    palette: this.props.palettes[0].colors, // keep record of the user-generated color, {color: '', name: ''}
    newPaletteName: ''
  };

  //add validator rule
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return this.state.palette.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule('isColorUnique', () =>
      this.state.palette.every(({ color }) => color !== this.state.currentColor)
    );
    ValidatorForm.addValidationRule('isPaletteUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule(
      'isPaletteEmpty',
      value => this.state.palette.length
    );
  }

  handleDrawer = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  // sync 'Add Color' button color with the color picker
  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  updatePalette = () => {
    const newColor = {
      name: this.state.newColorName,
      color: this.state.currentColor
    };
    this.setState({
      palette: [...this.state.palette, newColor],
      newColorName: ''
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  removeColor = colorName => {
    this.setState({
      palette: this.state.palette.filter(
        color => color.name.toLowerCase() !== colorName
      )
    });
  };

  clearPalette = () => {
    this.setState({ palette: [] });
  };

  addRandomColor = () => {
    const allColors = this.props.palettes.map(palette => palette.colors).flat();
    const unique = new Set(this.state.palette.map(color => color.name));
    let rand;
    do {
      rand = Math.round(Math.random() * allColors.length);
    } while (unique.has(allColors[rand].name));
    this.setState({
      palette: [...this.state.palette, allColors[rand]]
    });
  };

  submitPalette = () => {
    let newPaletteName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/s+/g, '-'),
      emoji: '🤣',
      colors: this.state.palette
    };
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(prevState => ({
      palette: arrayMove(prevState.palette, oldIndex, newIndex)
    }));
  };

  render() {
    const { classes, maxColorNums } = this.props;
    const {
      open,
      currentColor,
      palette,
      newColorName,
      newPaletteName
    } = this.state;
    const paletteIsFull = palette.length >= maxColorNums;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawer}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.submitPalette}>
              <TextValidator
                label="Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleInputChange}
                validators={['required', 'isPaletteUnique', 'isPaletteEmpty']}
                errorMessages={[
                  'This field is required',
                  'Name existed',
                  'Add some color in the palette first'
                ]}
                autoComplete="off"
              />
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
              <Button
                onClick={() => this.props.history.push('/')}
                variant="contained"
                color="secondary"
              >
                Go Back
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.clearPalette}
          >
            Clear Palette
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.updatePalette}>
            <TextValidator
              value={newColorName}
              name="newColorName"
              onChange={this.handleInputChange}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={[
                'This field is required',
                'The color name is already existed',
                'The color is already used'
              ]}
              autoComplete="off"
            />
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: paletteIsFull ? '#bbbbbb' : currentColor
              }}
              type="submit"
              disabled={paletteIsFull}
            >
              {paletteIsFull ? 'Palette Is Full' : 'Add Color'}
            </Button>
          </ValidatorForm>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            palette={palette}
            removeColor={this.removeColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(CreateNewPalette);
