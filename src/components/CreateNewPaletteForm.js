import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class CreateNewPaletteForm extends Component {
  state = {
    newPaletteName: '',
    showEmojiPicker: false
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

  showEmojiPicker = () => {
    this.setState({
      showEmojiPicker: true
    });
  };

  hideEmojiPicker = () => {
    this.setState({
      showEmojiPicker: false
    });
  };

  submitPalette = emoji => {
    let newPaletteName = this.state.newPaletteName;
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/\s+/g, '-'),
      emoji: emoji.native,
      colors: this.props.palette
    };
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  };

  render() {
    const { open, handleClose } = this.props;
    const { newPaletteName, showEmojiPicker } = this.state;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {showEmojiPicker ? (
          <>
            <DialogTitle id="form-dialog-title">Choose an Emoji</DialogTitle>
            <DialogContent>
              <Picker title="Choose an Emoji" onSelect={this.submitPalette} />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.hideEmojiPicker} color="primary">
                Back
              </Button>
            </DialogActions>
          </>
        ) : (
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogTitle id="form-dialog-title">Enter Palette Name</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To save the current palette, you need to enter a unique name and
                pick an emoji afterwards.
              </DialogContentText>
              <TextValidator
                name="newPaletteName"
                label="New Palette Name"
                value={newPaletteName}
                onChange={this.handleInputChange}
                validators={['required', 'isPaletteUnique', 'isPaletteEmpty']}
                autoFocus
                fullWidth
                errorMessages={[
                  'This field is required',
                  'Name existed',
                  'Add some color in the palette first'
                ]}
                autoComplete="off"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        )}
      </Dialog>
    );
  }
}

export default CreateNewPaletteForm;
