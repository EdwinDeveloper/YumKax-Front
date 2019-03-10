import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

class BtnGenerateReportComponent extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  state = {
    open: false,
    scroll: 'paper',
  };


  render() {
    return (
      <div>
      <Button color="secondary">
      <OpenInBrowserIcon />  Generar Reporte
      </Button>

      </div>
      );
  }
}

export default BtnGenerateReportComponent;
