import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',

  },
  formControl: {
    margin: '0 6px',
    width: '100%',
  },
  formContainer: {
    width: '50%',
    display: 'flex',
    padding: '0 8px',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnCreateDosificador: {
    height: '20px',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    width: '50%',
    backgroundColor: 'rgba(169, 93, 44, 1)',
    marginTop:'8px',
    '&:hover': {
      backgroundColor: 'rgba(163, 80, 33, 1)',
    },
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'left',
    width: '50%',
  },
  subTitle: {
    fontSize: '1.5rem',
    width: '50%',
    color: '#979797',
  },
  terms: {
    fontSize: '1rem',
    width: '100%',
    color: '#979797',
    textAlign: 'justify',
    marginTop:'8px',
  },
  btnRight: {
    display: 'flex',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  formAlign:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
  },


  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Nitrato de sodio',
  'Calcio',
  'Fosforo',
  'Potasio',
];

const ranges = [
  {
    value: '1-20',
    label: '0 a 20',
  },
  {
    value: '21-50',
    label: '21 a 50',
  },
  {
    value: '51-100',
    label: '51 a 100',
  },
];
function getStyles(name, that) {
  return {
    fontWeight: 'fontWeightRegular'
  };
}

class CreatePlantsComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      specie:'',
      type:'',
      color:'',
      weight:'',
      height:'',
      description:''
    }
    this.createPlantMethod=this.createPlantMethod.bind(this);
  }

  createPlantMethod(event){
      this.setState({
        [event.target.name]:event.target.value
      });
  }

 state = {
    name: [],
    weightRange: '',

  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
    handleChangeWeight = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleChangeMultiple = event => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      name: value,
    });
  };


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.formAlign}>
          <Typography className={classes.title}>Crear planta</Typography>
        <div className={classes.formContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-simple">Nombre</InputLabel>
            <Input onChange={this.createPlantMethod} name="name"/>
          </FormControl>
        </div>
        <div className={classes.formContainer}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Especie</InputLabel>
          <Input onChange={this.createPlantMethod} name="specie"/>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Tipo</InputLabel>
          <Input onChange={this.createPlantMethod} name="type"/>
        </FormControl>
        </div>
        <div className={classes.formContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="component-simple">Color</InputLabel>
            <Input onChange={this.createPlantMethod } name="color"/>
          </FormControl>
          <FormControl className={classes.formControl}>
          <TextField
          select
          label="Peso"
          value={this.state.weightRange}
          onChange={this.handleChangeWeight('weightRange')}
          InputProps={{
            startAdornment: <InputAdornment onChange={this.createPlantMethod} name="weight" position="start">Kg</InputAdornment>,
          }}
          >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
            {option.label}
            </MenuItem>
            ))}
          </TextField>
          </FormControl>
            <FormControl className={classes.formControl}>
                        <TextField
          label="With normal TextField"
          id="simple-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment name="height" position="start">Cm</InputAdornment>,
          }}
        />

          </FormControl>
        </div>
        <div className={classes.formContainer}>
 <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-chip">Nutrientes</InputLabel>
          <Select
            multiple
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={selected => (
              <div className={classes.chips}>
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name} style={getStyles(name, this)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
                <div className={classes.formContainer}>
          <FormControl className={classes.formControl}>
          <TextField
          placeholder="Escribe aqui la descripción"
          multiline={true}
          rows={4}
          name="description"
          rowsMax={8}
          />
          </FormControl>
        </div>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Typography className={classes.terms}>Al hacer clic en "crear planta", agregaras a la base de datos una nueva planta que estará disponible para su gestion.</Typography>
        </Grid>
          <div className={classes.formContainer}>
            <FormControl className={classes.btnRight}>
              <Button className={classes.btnCreateDosificador}>Crear planta</Button>
            </FormControl>
          </div>
        </div>
      </div>
      );
  }
}

export default withStyles(styles)(CreatePlantsComponent);
