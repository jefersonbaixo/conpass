import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../../store/actions";

const Popover = ({ isAddingHotspot, addHotspot, url, hotspotClass, num }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleClickOpen = event => {
    if (isAddingHotspot) {
      event.preventDefault();
      setOpen(true);
    }
  };

  const saveHotspot = () => {
    addHotspot(value, url);
    setOpen(false);
  };

  const handleClose = () => {
    setValue("");
    setOpen(false);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <a onClick={e => handleClickOpen(e)} href={url} className={hotspotClass}>
        Link {num}
      </a>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Entry hotspot name</DialogTitle>
        <form>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Hotspot Name"
              type="text"
              fullWidth
              value={value}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={saveHotspot} color="primary">
              Done
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  isAddingHotspot: state.isAddingHotspot
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Popover);
