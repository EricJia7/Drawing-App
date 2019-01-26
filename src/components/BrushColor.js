import React, { PropTypes } from "react";

export default function BrushColor(props) {
    const { action, brush_color } = props;
	console.log(action);
	return (
		<input
			type="color"
			className="color-input"
			value={brush_color}
			onChange={ (e) => {
				 action(e.target.value)
				//action(this.value);
			}}
		/>
	);
}

BrushColor.propTypes = {
	brush_color: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
