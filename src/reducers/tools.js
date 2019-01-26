import { SELECT_TOOL, CHANGE_SIZE, SELECT_COLOR } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "#000002",
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
		console.log(action)

			return Object.assign({}, state, {
				brush_size: action.text
			})

		case SELECT_TOOL:
		console.log(action)

			return Object.assign({}, state, {
				tool: action.text
			})

		case SELECT_COLOR:
		console.log(action)
			return Object.assign({}, state, {
				brush_color: action.text
			})

		default:
			return state;
	}
}
