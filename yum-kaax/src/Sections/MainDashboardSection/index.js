import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardComponent from '../../Views/TemplateDashboardView/CardComponent';
import AddCropButtonComponent from '../../Components/AddCropButtonComponent';
import ChartTimeLineInProcessComponent from '../../Components/ChartTimeLineInProcessComponent';
import PieChartStoryComponent from '../../Components/PieChartStoryComponent';
import { NavLink } from 'react-router-dom';
import {findUserCrops} from '../../Lib/ApiService/services';

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
  containerMain: {
    display: 'flex',
    padding: '0 8px',
    justifyContent: 'space-around',
  },
  containerCards: {
    display: 'flex',
    padding: '0 8px',
  },
  fab: {
    margin: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  addButton:{
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  }
});

class MainDashboardSection extends Component {
  constructor(props){
    super(props);
    this.state={
      crops:[],
    }
  }
  async componentDidMount() {
    const token = localStorage.getItem("token");
    const showCardFunction = await findUserCrops(token);
    this.setState({
          crops:showCardFunction.payload.cropsUserFind
    });
  }

  render() {
    const { classes } = this.props;
      let {crops} = this.state;
      let getCrops = [];
      if(crops.length > 0){
        getCrops = crops.map((crop, index)=> {
        return(
            <CardComponent key={index} date={crop.date} cropTime={crop.cropTime}
            cropStatus={crop.cropStatus}>
            </CardComponent>
          )
      })
      }
    return (
      <div>
      <div className={classes.containerMain}>
      <ChartTimeLineInProcessComponent/>{/** AQUI SIGUELE DATOS TABLA*/}
      <PieChartStoryComponent/>
      </div>
      <div className={classes.containerCards}>
      {getCrops}
      </div>
      <NavLink to="/main/add/crops" activeClassName="selected" style={{ textDecoration: 'none' }}>
      <div className={classes.addButton}>
      <AddCropButtonComponent/>
      </div>
      </NavLink>
      </div>
      );
  }
}
MainDashboardSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainDashboardSection);
