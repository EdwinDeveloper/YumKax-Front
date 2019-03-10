import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {machinesAssign,verifyMachine} from '../Lib/ApiService/services';

const styles = theme => ({
  containerDiv: {
    display: 'flex',
  },
});

class AddDosificadorDialogComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      modelo:"",
      serie:""
    }
    this.handleAddDocificador=this.handleAddDocificador.bind(this);
    this.handleChangeInput=this.handleChangeInput.bind(this);
  }
  state = {
    open: false,
  };

  handleChangeInput(event){
    let t=event.target;
    let v=t.value;
    let n= t.name;
    this.setState({
      [n]:v
    });
    console.log(n,v);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddDocificador = async () =>{
    const token = localStorage.getItem('token');
    const verify = {
        serial_number:this.state.serie,
        model:this.state.modelo
    }
    const dataDosificador = await verifyMachine(token,verify);

    const recordStatus = dataDosificador.payload.machine[0].recordStatus;
    const useStatus = dataDosificador.payload.machine[0].useStatus;
    const asign = {
      serial_number:this.state.serie,
      recordStatus,
      useStatus,
      model:this.state.modelo
    }
    const assignedMachine = await machinesAssign(token,asign);
    console.log(assignedMachine);
    if(assignedMachine.success==true){
      alert("Asignacion exitosa");
    }else{
      alert(assignedMachine.message)
    }

     
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      <Button variant="outlined" color="default" onClick={this.handleClickOpen}>
      Agregar dosificador
      </Button>
      <Dialog
      open={this.state.open}
      onClose={this.handleClose}
      aria-labelledby="form-dialog-title"
      >
      <DialogTitle id="form-dialog-title">Agregue un nuevo dosificador</DialogTitle>
      <DialogContent>
      <DialogContentText>
      Para agreagar un nuevo dosificador, ingrese el numero de serie del producto que se encuentra en la etiquete al reverso del dispositivo.
      </DialogContentText>


      <div className={classes.containerDiv}>
      <TextField
      autoFocus
      margin="dense"
      id="name"
      name="serie"
      label="Numero de serie del dosificador"
      type="text"
      fullWidth
      onChange={this.handleChangeInput}
      />
      <TextField
      margin="dense"
      id="name"
      name="modelo"
      label="Modelo del dosificador"
      type="text"
      fullWidth
      onChange={this.handleChangeInput}
      />
      </div>
      </DialogContent>
      <DialogActions>
      <Button onClick={this.handleClose} color="primary">
      Cancelar
      </Button>
      <Button onClick={this.handleAddDocificador} color="primary">
      Confirmar
      </Button>
      </DialogActions>
      </Dialog>
      </div>
      );
  }
}

AddDosificadorDialogComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDosificadorDialogComponent);
