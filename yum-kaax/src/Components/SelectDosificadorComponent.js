import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,

  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SelectDosificadorComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: '',
      name: 'hai',
      labelWidth: 0,
      selectMachine:''
    };
    this.handleChange=this.handleChange.bind(this);
  }


  handleChange = (event) => {
    this.setState({ selectMachine: event.target.value });
  };

  render(){
    const { classes } = this.props;
    const { machines,selectMachine } = this.props;
    const ma = machines.map((value)=>{
      return <MenuItem value={value._id}>Dosificador: {value.serial_number}</MenuItem>
    });
    return(

      <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="age-label-placeholder">
      Dosificador
      </InputLabel>
      <Select
      value={this.state.selectMachine}
      onChange={this.handleChange}

      input={<Input name="age" id="age-label-placeholder" />}
      displayEmpty
      name="age"
      className={classes.selectEmpty}
      >
            {ma}
      </Select>
      </FormControl>
      </form>
      )
  }
}

SelectDosificadorComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectDosificadorComponent);

