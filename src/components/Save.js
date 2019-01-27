import React, {PropTypes} from "react";

export default function Save(props) {

  const {action} = props;

  return (
    <div>
      <button
        type="button"
        className="btn btn btn-md btn-primary text-uppercase"
        onClick={e => {
            action("true");
            e.preventDefault();
            // JS way
            // let canvas = document.getElementById('mainCancas');
            // canvas.getContext("2d").clearRect(0,0, canvas.width, canvas.height)
          }}
      >
        Save
      </button>
    </div>
  );
}

Save.propTypes = {
	action: PropTypes.func.isRequired
};
