import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ImgCrop from '../../Assets/Img/Background/nulleight.png';
import { Link} from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import {getPlants,MachinesByUser,CreateAssignCrop} from '../../Lib/ApiService/services';

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  containerCenter: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },


  header: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  btnLogin: {
    height: '20px',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(169, 93, 44, 1)',
    marginTop: '24px',

  },
  containerMain: {
    display: 'flex',
    padding: '0 8px',
    justifyContent: 'space-around',
  },
  containerGeneral:{
    display: 'flex',
    padding: '0 8px',
    flexDirection: 'column',
  },
  dense: {
   marginLeft: '8px',
 },
 selectEmpty: {
  marginTop: theme.spacing.unit * 2,
},
formControl: {
  margin: theme.spacing.unit,
  minWidth: 120,
},
alignCenter:{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'inherit',
  justifyContent: 'center',
},
});

class AddCropsSection extends Component {

  constructor(props){
    super(props);
    this.state={
        plants:[],
        machinesAvailable:[],

        machineSelected:'',
        selected:'',

        amountPlants:'',
        sections:''
    }
    this.handlePlantSelected=this.handlePlantSelected.bind(this);
    this.newCrop=this.newCrop.bind(this);
  }

  state = {
    tipo: '',
    cantidad: null,
    seccion: null,
  };
  async componentDidMount(){
    const token = localStorage.getItem('token');
    const dataPlants = await getPlants(token);
    const arrayPlants = dataPlants.payload.allPlants;
    const dataMachines = await MachinesByUser(token);
    const arrayMachines = dataMachines.payload.machine;
    const machinesAvailable = arrayMachines.reduce((reducer,currentMachine,index)=>{
        if(currentMachine.useStatus==="false"){
            return [...reducer,currentMachine];
        }
        return reducer;
    },[]);
    this.setState({
      plants:arrayPlants,
      machinesAvailable:machinesAvailable
    });
  }
  handlePlantSelected(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  async newCrop(){
    const {selected,amountPlants,sections}=this.state;
    if(selected==='' || amountPlants==='' || sections===''){
      alert("Campos vacios");
    }else{
      const newCrop = {
        plantAmount:this.state.amountPlants,
        cropTime:'summer',
        wheader:'humid',
        date:'2019-03-10T06:00:00.000Z',
        cropStatus:'active',
        id_plant:this.state.selected,
        id_machine:this.state.machineSelected
      }
      const token = localStorage.getItem('token');
      const newC = await CreateAssignCrop(token,newCrop);
      alert(newC.message);
    }
  }

  render() {
    const { classes } = this.props;
    // eslint-disable-next-line react/no-direct-mutation-state
    return (

      <div>
      <div className={classes.containerGeneral}>
      <Grid item xs={12}sm={12}md={12}lg={12}xl={12} className={classes.alignCenter}>

      <div className={classes.containerMain}>

      <FormControl className={classes.formControl}>
      {/********************MACHINES*****************************/}
      <InputLabel shrink htmlFor="age-label-placeholder">
        Dosificador disponibles
      </InputLabel>

      <Select
          input={<Input name="age" id="age-label-placeholder" />}
          displayEmpty
          name="machineSelected"
          className={classes.selectEmpty}
          value={this.state.machineSelected}
          onChange={this.handlePlantSelected}
          >
          {
            this.state.machinesAvailable.map((machine)=>{
                return <MenuItem value={machine._id} key={machine._id}>{machine.serial_number}</MenuItem>;
            })
          }
      </Select>

      </FormControl>
      <img alt="Remy Sharp" src={ImgCrop} className={classes.img} />
      </div>
      </Grid>

      <div className={classes.container}>
      <div className={classes.containerCenter}>

      <FormControl className={classes.formControl}>
      {/*****************MACHINES***********************/}
      <InputLabel shrink htmlFor="tipo-label-placeholder">
      Tipo de planta
      </InputLabel>

      {/** **********************PLANTS NAMES*************************/}
      <Select
        input={<Input name="age" id="age-label-placeholder" />}
        displayEmpty
        name="selected"
        className={classes.selectEmpty}
        value={this.state.selected}
        onChange={this.handlePlantSelected} >
        {
          this.state.plants.map((plant)=>{
              return <MenuItem value={plant._id} key={plant._id}>{plant.name}</MenuItem>;
          })
        }
      </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="cantidad-label-placeholder">
      Cantidad
      </InputLabel>

        {/**********************AMOUNT PLANTS*******************+*/}
      <Select
      value={this.state.amountPlants}
      onChange={this.handleChange}
      input={<Input name="cantidad" id="cantidad-label-placeholder"/>}
      displayEmpty
      name="amountPlants"
      className={classes.selectEmpty}
      onChange={this.handlePlantSelected}
      >
      <MenuItem value={2} key={2} >2</MenuItem>
      <MenuItem value={4} key={4} >4</MenuItem>
      <MenuItem value={6} key={6} >6</MenuItem>
      </Select>

      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="seccion-label-placeholder">
      Secciones
      </InputLabel>

      {/******************SECTIONS*******************************/}
      <Select
      value={this.state.sections}
      onChange={this.handlePlantSelected}
      input={<Input name="seccion" id="seccion-label-placeholder" />}
      displayEmpty
      name="sections"
      className={classes.selectEmpty}
      >
      <MenuItem value={1}>1</MenuItem>
      <MenuItem value={2}>2</MenuItem>
      <MenuItem value={3}>3</MenuItem>
      </Select>
      </FormControl>

      </div>

      {/*<Link to="/main/add/crops/crop/growth" style={{ textDecoration: 'none' }} >*/}
      <Button   type="submit" onClick={this.newCrop} className={classes.btnLogin}>Crear cultivo
      </Button>
      {/*</Link>*/}
      </div>
      </div>
      </div>
      )
  }
}

export default withStyles(styles, { withTheme: true })(AddCropsSection);
