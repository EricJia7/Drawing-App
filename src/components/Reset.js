import React, { PropTypes } from "react";

export default function Reset(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn btn-md btn-primary text-uppercase"
        onClick={e => {
            let canvas = document.getElementById('mainCancas');
            console.log(canvas);
            canvas.getContext("2d").clearRect(0,0, canvas.width, canvas.height)
            e.preventDefault();
          }}
      >
        Reset
      </button>
    </div>
  );
}