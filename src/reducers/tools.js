import { SELECT_TOOL, CHANGE_SIZE, SELECT_COLOR, SELECT_IMAGE, RESET_CANVAS, SAVE_CANVAS } from "../constants/ActionTypes";
import stIcon from "../../public/img/st-icon.png"
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "#FF6347",
	image_url: stIcon,
	isCanvasReset: "false",
	isSaveCanvas: "false",
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return Object.assign({}, state, {
				brush_size: action.text
			})

		case SELECT_TOOL:
			return Object.assign({}, state, {
				tool: action.text
			})

		case SELECT_COLOR:
			return Object.assign({}, state, {
				brush_color: action.text
			})

		case SELECT_IMAGE:
			return Object.assign({}, state, {
				image_url: action.text
			})

		case RESET_CANVAS:
			return Object.assign({}, state, {
				isCanvasReset: action.text
			})

		case SAVE_CANVAS:
			return Object.assign({}, state, {
				isSaveCanvas: action.text
			})
			
		default:
			return state;
	}
}
