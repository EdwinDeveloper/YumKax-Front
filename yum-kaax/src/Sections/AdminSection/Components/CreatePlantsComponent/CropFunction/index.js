import React,{Component} from 'react';

class CropFunction extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
=======
  constructor(props){
    super(props);
    this.state={}
>>>>>>> develop
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
return(

<div>
    <Files
        multiple
        convertToBase64
        accept={["image/jpg", "image/jpeg", "image/png"]}
        onError={this.handleErrors}
        onSuccess={files =>
            // Will append images at the end of the list.
            this.handleFiles(files, this.state.files.length)
        }
    >
        {({ browseFiles, getDropZoneProps }) => (
            <div
                {...getDropZoneProps({
                    className:
                        gallery + (this.state.dragging ? " dragging" : ""),
                    onDragEnter: () => this.setState({ dragging: true }),
                    onDragLeave: () => this.setState({ dragging: false }),
                    onDrop: () => this.setState({ dragging: false })
                })}
            >
                <ul>
                    {this.state.files.map((image, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                browseFiles({
                                    onErrors: this.handleErrors,
                                    onSuccess: files => {
                                        // Will insert images after the clicked image.
                                        this.handleFiles(files, index + 1);
                                    }
                                });
                            }}
                        >
                            <img src={image.src} />
                        </li>
                    ))}
                    <li
                        className="new-image"
                        onClick={() => {
                            browseFiles({
                                onErrors: this.handleErrors,
                                onSuccess: files => {
                                    // Will append images at the end of the list.
                                    this.handleFiles(
                                        files,
                                        this.state.files.length
                                    );
                                }
                            });
                        }}
                    >
                        <div>+</div>
                    </li>
                </ul>
            </div>
        )}
    </Files>
    {this.state.errors.length > 0 && <div>An error occurred.</div>}
</div>)
    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}


export default CropFunction;
