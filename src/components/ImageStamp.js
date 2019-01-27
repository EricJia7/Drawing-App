import React, { PropTypes } from "react";

export default function ImageStamp(props) {
  const { action, image_url } = props;

  return (
    <div className="container">
      <div className="row">
        <input
          type="button"
          className="btn btn-md btn-primary text-uppercase"
          value="Upload Image"
          onClick={e => {
            e.preventDefault();
            document.getElementById("imageItem").click();
          }}
        />
        <input
          id="imageItem"
          type="file"
          onChange={e => {
            let tempUrl = URL.createObjectURL(e.target.files[0]);
            action(tempUrl);
          }}
        />
      </div>
      <br />
      <div className="col-md-12">
        <img
          src={image_url}
          className="rounded mx-auto d-block img-fluid"
          alt="selected"
          id="currentSelectedImage"
        />
      </div>
      <br></br>
    </div>
  );
}

ImageStamp.prototype = {
  image_url: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}
