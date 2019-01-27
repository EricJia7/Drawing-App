import React, { PropTypes } from "react";
import { BRUSH, STAMP, ERASER } from "../constants/Tools";

export default function ToolSelector(props) {
  const { action } = props;
  return (
    <div>

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
