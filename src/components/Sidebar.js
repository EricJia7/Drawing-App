import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from "./BrushColor";
import ImageStamp from "./ImageStamp";
import Reset from "./Reset";

export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size, brush_color, image_url, isCanvasReset } = tools;
		return (

			<div className="sidebar">
				<br />
				<section className="section section--tool-selector">
					<div className="section__heading text-uppercase text-primary headerText">Tool</div>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>

				<section className="section section--brush-size">
					<div className="section__heading text-uppercase text-primary headerText">Brush Size</div>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>

				<section className="section section--brush-color">
					<div className="section__heading text-uppercase text-primary headerText">Brush Color</div>
					<BrushColor
						brush_color={ brush_color }
						action={ actions.selectColor }
					/>
				</section>

				<section className="section section--image-stamp">
					<div className="section__heading text-uppercase text-primary headerText">Image Stamp</div>
					<ImageStamp
						image_url={ image_url }
						action={ actions.selectImg }
					/>
				</section>

				<section className="section section--reset">
					<div className="section__heading text-uppercase text-primary headerText">Reset</div>
					<Reset
						isCanvasReset={ isCanvasReset }
						action={ actions.resetCanvas }
					/>
				</section>

			</div>
		)
	}
}
