import React, { PropTypes } from "react";
import { BRUSH, STAMP, ERASER } from "../constants/Tools";

export default function ToolSelector(props) {
  const { action } = props;
  return (
    <div>
      {/* <div className="radio">
				<input type="radio" name="tool" id="brush-select"
					value={BRUSH} 
					checked={tool === BRUSH} 
					onChange={ (e) => { action(e.target.value) } } />
				<label htmlFor="brush-select">Brush</label>
			</div>

			<div className="radio">
				<input type="radio" name="tool" id="stamp-select"
					value={STAMP} 
					checked={tool === STAMP} 
					onChange={ (e) => { action(e.target.value) } } />
				<label htmlFor="stamp-select">Stamp</label>
			</div>

			<div className="radio">
				<input type="radio" name="tool" id="eraser-select"
					value={ERASER} 
					checked={tool === ERASER} 
					onChange={ (e) => { action(e.target.value) } } />
				<label htmlFor="eraser-select">Eraser</label>
			</div> */}

      <button
        type="button"
        className="btn btn-sm btn-secondary"
        name="tool"
        id="brush-select"
        value={BRUSH}
        onClick={e => {
          action(e.target.value);
        }}
      >
        BRUSH
      </button>

      <button
        type="button"
        className="btn btn-sm btn-secondary"
        name="tool"
        id="eraser-select"
        value={ERASER}
        onClick={e => {
          action(e.target.value);
        }}
      >
        ERASER
      </button>

      <button
        type="button"
        className="btn btn-sm btn-info"
        name="tool"
        id="stamp-select"
        value={STAMP}
        onClick={e => {
          action(e.target.value);
        }}
      >
        STAMP
      </button>
    </div>
  );
}

ToolSelector.propTypes = {
  tool: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};
