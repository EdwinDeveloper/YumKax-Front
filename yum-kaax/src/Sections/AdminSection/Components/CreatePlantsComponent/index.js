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
import Avatar from '@material-ui/core/Avatar';
import AvatarImg from '../../../../Assets/Img/Avatar/avatar.jpg';
import CropFunction from './CropFunction';

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
});

class CreatePlantsComponent extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.formAlign}>
          <Typography className={classes.title}>Crea plantas</Typography>
          <Grid container justify="center" alignItems="center">
      <CropFunction/>
    </Grid>
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
              <InputLabel htmlFor="component-simple">Correo electrónico</InputLabel>
              <Input onChange={this.handleChangeInput} name="email"/>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="component-simple">Usuario</InputLabel>
              <Input onChange={this.handleChangeInput} name="user"/>
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

export default withStyles(styles)(CreatePlantsComponent);
