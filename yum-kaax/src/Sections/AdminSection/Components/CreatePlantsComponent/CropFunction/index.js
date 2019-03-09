import React,{Component} from 'react';
import './CropFunction.css';

class CropFunction extends Component {

  render() {
    return (
      <div className="page">
  <h2>Upload ,Crop and save.</h2>
  <div className="box">
    <input type="file" id="file-input"/>
  </div>
  <div className="box-2">
    <div className="result"></div>
  </div>
  <div className="box-2 img-result hide">
    <img className="cropped" src="" alt=""/>
  </div>

  <div className="box">
    <div className="options hide">
      <label> Width</label>
      <input type="number" className="img-w" value="300" min="100" max="1200" />
    </div>
    <button className="btn save hide">Save</button>
    <a href="#" className="btn download hide">Download</a>
  </div>
</div>
      );
  }
}

export default CropFunction;
