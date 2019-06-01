import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CreateNewPaletteForm extends Component {
  state = {
    newPaletteName: ''
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule(
      'isPaletteEmpty',
      () => this.props.palette.length
    );
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitPalette = () => {
    let newPaletteName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/s+/g, '-'),
      emoji: '🤣',
      colors: this.props.palette
    };
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  };

  render() {
    const { open, handleClose } = this.props;
    const { newPaletteName } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <ValidatorForm onSubmit={this.submitPalette}>
              <TextValidator
                label="New Palette Name"
                name="newPaletteName"
                value={newPaletteName}
                onChange={this.handleInputChange}
                validators={['required', 'isPaletteUnique', 'isPaletteEmpty']}
                fullWidth
                errorMessages={[
                  'This field is required',
                  'Name existed',
                  'Add some color in the palette first'
                ]}
                autoComplete="off"
              />
            </ValidatorForm>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreateNewPaletteForm;
