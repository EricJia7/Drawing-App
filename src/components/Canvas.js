import React, { PropTypes, Component } from "react";
import { BRUSH, ERASER, STAMP } from "../constants/Tools";

let ctx;

export default class Canvas extends Component {
	
	constructor(props) {
		super(props);
		this.isDrawing = false;
		this.isDrawingImage = false;
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.refs.canvas.height = window.innerHeight;
		this.refs.canvas.width = window.innerWidth;
		ctx = this.refs.canvas.getContext("2d");
	}

	componentDidUpdate(prevProps) {
		if (this.props.tools.isCanvasReset !== prevProps.tools.isCanvasReset) {
			this.props.tools.tool = BRUSH;
			this.resetCanvas();
			this.props.tools.isCanvasReset = "false";
		}

		if (this.props.tools.isSaveCanvas !== prevProps.tools.isSaveCanvas) {
			this.saveCanvas();
			this.props.tools.isSaveCanvas = "false";
		}
	}

	getStroke() {
		return this.props.tools.brush_size;
	}

	getStrokeColor() {
		return this.props.tools.brush_color;
	}

	getImageUrl() {
		return this.props.tools.image_url;
	}

	getImageStampWidth() {
		return document.getElementById("currentSelectedImage").clientWidth;
	}

	getImageStampHeight() {
		return document.getElementById("currentSelectedImage").clientHeight;
	}

	getX(event) {
		//The mouse position relative to the left edge of the document.
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.refs.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.refs.canvas.offsetLeft;
		}
	}

	getY(event) {
		//The mouse position relative to the top edge of the document.
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.refs.canvas.offsetTop;
		}
		else {
			return event.pageY - this.refs.canvas.offsetTop;
		}
	}

	start(event) {
		if (this.props.tools.tool === BRUSH || this.props.tools.tool === ERASER) {
			this.isDrawing = true;
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			event.preventDefault();

		} else if (this.props.tools.tool === STAMP) {
			this.isDrawingImage = true;
			let image = new Image();
			let imageUrl = this.getImageUrl();
			let imageWidth = this.getImageStampWidth();
			let imageHeight = this.getImageStampHeight();
			image.src = imageUrl
			console.log(image);
			ctx.drawImage(image,this.getX(event)-imageWidth/2,this.getY(event)-imageHeight/2, imageWidth, imageHeight);
			ctx.closePath();
			event.preventDefault();
		}
	}

	draw(event) {
		if (this.isDrawing) {
			ctx.lineTo(this.getX(event), this.getY(event));
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.lineWidth = this.getStroke();
			ctx.strokeStyle = this.getStrokeColor();
			if (this.props.tools.tool === ERASER) {
				ctx.strokeStyle = '#FFFFFF';
				ctx.stroke();
			} else {
				ctx.stroke();
			}
		}
		event.preventDefault();
	}

	end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
			this.isDrawingImage = false;
			event.preventDefault();
		}
	}

	drawImage(event) {
		if (this.isDrawingImage) {
			console.log("Drawing Image Enabled");
			let imageUrl = this.getImageUrl();
			console.log(imageUrl);
			ctx.drawImage(imageUrl);
		} else {
			return;
		}
		event.preventDefault();
	}

	resetCanvas(event) {
		ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	}

	saveCanvas(event) {
		console.log('saveCanvas has been called')
		let saveImgURL = this.refs.canvas.toDataURL("image/png");
		
		let tempImg = new Image();
		//Anonymous to fix the tainted canvas problem
		tempImg.crossOrigin = "Anonymous"
		tempImg.src = saveImgURL;
		let w = window.open("");
		w.document.write(tempImg.outerHTML);
		console.log(saveImgURL);
	}

	render() {
		return (
			<canvas
				className="canvas"
				ref="canvas"
				id="mainCancas"
				onMouseDown={  this.start}
				onMouseUp={ this.end }
				onMouseMove={ this.draw }
			></canvas>
		)
	}
}

Canvas.propTypes = {
	tools: PropTypes.object.isRequired
}