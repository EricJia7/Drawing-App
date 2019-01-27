import { SELECT_TOOL, CHANGE_SIZE, SELECT_COLOR, SELECT_IMAGE } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "#FF6347",
	image_url: "https://pbs.twimg.com/profile_images/982276118475522049/l8lXdD3y_400x400.jpg",
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
		console.log('!!!!')

			return Object.assign({}, state, {
				brush_color: action.text
			})

		case SELECT_IMAGE:
		console.log('~~~~')
			return Object.assign({}, state, {
				image_url: action.text
			})

		default:
			return state;
	}
}
