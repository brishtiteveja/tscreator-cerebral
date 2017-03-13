import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		imags: 'imags',
		chosen: 'whichImage',
		lines: 'lines',
		whichImage: 'whichImage',
		datapacks: 'datapacks',
	},	
	{
		updateLines: 'sriramLineClicked',
		updateExport: 'sriramExportImage',
	},

	function ImageEdited(props) {
		var myImage = new Image();
		myImage.src = props.imags[props.chosen];
		var height = myImage.height;
		var width = myImage.width;
		var contents = JSON.stringify(props.datapacks[props.whichImage]);
		var datauri = 'data:application/json;charset=utf-8,' + encodeURIComponent(contents);
		props.updateExport({"exportImage": datauri});

		const insertTimeline = event => {
			var image = event.target;
			var svg = image.getBoundingClientRect();
			var position = (event.clientY - svg.top) * height / svg.height;
			props.updateLines({"coordinate": position});
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
