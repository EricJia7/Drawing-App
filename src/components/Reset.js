import React, {PropTypes} from "react";

export default function Reset(props) {

  const {action, isCanvasReset} = props;

  return (
    <div>
      <button
        type="button"
        className="btn btn btn-md btn-primary text-uppercase"
        defaultValue={isCanvasReset}
        onClick={e => {
            action("true");
            e.preventDefault();
            // JS way
            // let canvas = document.getElementById('mainCancas');
            // canvas.getContext("2d").clearRect(0,0, canvas.width, canvas.height)
          }}
      >
        Reset
      </button>
    </div>
  );
}

Reset.propTypes = {
	isCanvasReset: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
