import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		imags: 'imags',
		chosen: 'whichImage',
		lines: 'lines',
		whichImage: 'whichImage',
	},	
	{
		updateLines: 'sriramLineClicked',
	},

	function ImageEdited(props) {
		var myImage = new Image();
		myImage.src = props.imags[props.chosen];
		var height = myImage.height;
		var width = myImage.width;

		const insertTimeline = event => {
			var image = event.target;
			var svg = image.getBoundingClientRect();
			var position = event.clientY - svg.top;
			props.updateLines({"coordinate": position});
		}
		
		var lineStuff = props.lines.map((line, index) => { 
			if(line.image == props.whichImage) {
				return <line key = {index} x1 = "0" x2 = {width} y1 = {line.y} y2 = {line.y} stroke = "red" strokeWidth = "2"/>;
			}
		})
		
		return(
			<svg className = "mainImage" viewBox = {"0 0 " + width + " " + height} height = {height} width = {width}>
				<image className = "actualImage" xlinkHref = {props.imags[props.chosen]} onDoubleClick = {insertTimeline}/>
				{lineStuff}
			</svg>
		)
	}
);
