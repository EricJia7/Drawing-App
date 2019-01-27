import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";
import BrushColor from "./BrushColor";
import ImageStamp from "./ImageStamp";

export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size, brush_color, image_url } = tools;
		return (

			<div className="sidebar">
				<br />
				<section className="section section--tool-selector">
					<h3 className="section__heading text-uppercase text-primary">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>

				<section className="section section--brush-size">
					<h3 className="section__heading text-uppercase text-primary">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>

				<section className="section section--brush-color">
					<h3 className="section__heading text-uppercase text-primary">Brush Color</h3>
					<BrushColor
						brush_color={ brush_color }
						action={ actions.selectColor }
					/>
				</section>

				<section className="section section--image-stamp">
					<h3 className="section__heading text-uppercase text-primary">Image Stamp</h3>
					<ImageStamp
						image_url={ image_url }
						action={ actions.selectImg }
					/>
				</section>

			</div>
		)
	}
}
