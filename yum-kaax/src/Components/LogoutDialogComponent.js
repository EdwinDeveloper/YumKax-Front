import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class LogoutDialogComponent extends Component {
    constructor(props){
      super(props);
      
        this.handleCloseSession=this.handleCloseSession.bind(this);
    }
    state={
      open:false
    }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleCloseSession = ()=>{
    localStorage.setItem("token","");
    this.props.history.push('/');
  }

  render() {
    const { fullScreen } = this.props;

    return (
      <div>






            <ListItem button onClick={this.handleClickOpen} size="small">
      <ListItemIcon><ExitToAppIcon /></ListItemIcon>
      <ListItemText primary="Cerrar sesión" /></ListItem>



      <Dialog
      fullScreen={fullScreen}
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="responsive-dialog-title"
      >
      <DialogTitle id="responsive-dialog-title">{"Cerrar sesión"}</DialogTitle>
      <DialogContent>
      <DialogContentText>
      ¿Estas seguro de cerrar la sesión?
      Todos los cambios que no han sido guardados se perderán
      </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={this.handleClose} color="primary">
      No
      </Button>
      <Button onClick={this.handleCloseSession} color="primary" autoFocus>
      Si
      </Button>
      </DialogActions>
      </Dialog>
      </div>
      );
  }
}

LogoutDialogComponent.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(LogoutDialogComponent);
