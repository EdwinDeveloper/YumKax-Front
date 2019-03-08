import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

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
  }
});

class CreateMachineComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      showPassword: false,
    }
  }



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <div className={classes.formAlign}>
      <Typography className={classes.title}>Crea tus dosificadores</Typography>
      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Modelo del dosificador</InputLabel>
      <Input onChange={this.handleChangeInput} name="model"/>
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">N/S del dosificador</InputLabel>
      <Input onChange={this.handleChangeInput} name="serial_number"/>
      </FormControl>
      </div>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <Typography className={classes.terms}>Al hacer clic en "crear dosificador", agregaras a la base de datos una licencia de dosificador disponible para su venta.</Typography>
      </Grid>
      <div className={classes.formContainer}>
      <FormControl className={classes.btnRight}>
      <Button className={classes.btnCreateDosificador} >Crear dosificador</Button>
      </FormControl>
      </div>
      </div>
      </Grid>
      </div>
      );
  }
}

CreateMachineComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CreateMachineComponent);
