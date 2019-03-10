import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CreateMachineComponent from './Components/CreateMachineComponent';
import NewUserComponent from './Components/NewUserComponent';
import CreatePlantsComponent from './Components/CreatePlantsComponent';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100vh',
  },
});

class FullWidthTabs extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Crear Dosificadores" />
            <Tab label="Crear Planta" />
            <Tab label="Alta de Usuario" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <CreateMachineComponent dir={theme.direction}></CreateMachineComponent>
          <CreatePlantsComponent dir={theme.direction}>Item Two</CreatePlantsComponent>
          <NewUserComponent dir={theme.direction}>Item Three</NewUserComponent>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
