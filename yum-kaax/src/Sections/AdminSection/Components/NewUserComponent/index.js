import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

class NewUserComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: '',
      showPassword: false,
      showPasswordConfirm: false,
    };
  }
  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  handleClickShowPasswordConfirm = () => {
    this.setState(state => ({ showPasswordConfirm: !state.showPasswordConfirm }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
      <div className={classes.formAlign}>
      <Typography className={classes.title}>Crea cuentas administrativas</Typography>
      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Nombre completo</InputLabel>
      <Input onChange={this.handleChangeInput} name="name"/>
      </FormControl>
      </div>
      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Correo electrónico</InputLabel>
      <Input onChange={this.handleChangeInput} name="email"/>
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="component-simple">Usuario</InputLabel>
      <Input onChange={this.handleChangeInput} name="user"/>
      </FormControl>
      </div>
      <div className={classes.formContainer}>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="adornment-password">Contraseña</InputLabel>
      <Input
      id="adornment-password"
      type={this.state.showPassword ? 'text' : 'password'}
      value={this.state.password}
      onChange={this.handleChangeInput}
      endAdornment={
        <InputAdornment position="end">
        <IconButton
        aria-label="Toggle password visibility"
        onClick={this.handleClickShowPassword}
        >
        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
        </InputAdornment>
      }
      name="password"
      />
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="adornment-confirm-password">Confirmar contraseña</InputLabel>
      <Input
      id="adornment-confirm-password"
      type={this.state.showPasswordConfirm ? 'text' : 'password'}
      value={this.state.passwordConfirm}
      onChange={this.handleChangeInput}
      endAdornment={
        <InputAdornment position="end">
        <IconButton
        aria-label="Toggle password visibility"
        onClick={this.handleClickShowPasswordConfirm}
        >
        {this.state.showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
        </IconButton>
        </InputAdornment>
      }
      name="passwordConfirm"
      />
      </FormControl>
      </div>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
      <Typography className={classes.terms}>Al hacer clic en "crear dosificador", agregaras a la base de datos una licencia de dosificador disponible para su venta.</Typography>
      </Grid>
      <div className={classes.formContainer}>
      <FormControl className={classes.btnRight}>
      <Button className={classes.btnCreateDosificador}>Crear usuario</Button>
      </FormControl>
      </div>
      </div>
      </div>
      );
  }
}

NewUserComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NewUserComponent);
