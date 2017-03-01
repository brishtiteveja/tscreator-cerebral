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
			svg = document.getElementById("sriramEditImage");
			var contents = '<?xml-stylesheet href = "../VIP/tscreator-cerebral/src/components/ImageEdited/function.css" type = "text/css"?>' + svg.outerHTML;
			contents = '<?xml version = "1.0" standalone="yes"?>\r\n' + contents;
			contents = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(contents);
			props.updateLines({"coordinate": position, "exportImage": contents});
		}
		
		var lineStuff = props.lines.map((line, index) => { 
			if(line.image == props.whichImage) {
				return <line key = {index} x1 = "0" x2 = {width} y1 = {line.y} y2 = {line.y} stroke = "red" strokeWidth = "2"/>;
			}
		})
		
		return(
			<svg className = "mainImage" viewBox = {"0 0 " + width + " " + height} height = {height} width = {width} id = "sriramEditImage">
				<image className = "actualImage" xlinkHref = {props.imags[props.chosen]} onDoubleClick = {insertTimeline}/>
				{lineStuff}
			</svg>
		)
	}
);
