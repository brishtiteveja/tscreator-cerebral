import React from 'react'
import Line from '../Line'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		whichImage: 'app.whichImage',
		datapacks: 'app.datapacks',
		hideTime: 'app.hideTimeList',
	},	
	{
		updateLines: 'app.sriramLineClicked',
		updateExport: 'app.sriramExportImage',
		updateOffsets: 'app.sriramUpdateOffsets',
	},
	
	function ImageEdited(props) {
		var myImage = new Image();
		myImage.src = props.datapacks[props.whichImage].backgroundImage.dataURL;
		var height = myImage.height;
		var width = myImage.width;
		var contents = JSON.stringify(props.datapacks[props.whichImage]);
		var datauri = 'data:application/json;charset=utf-8,' + encodeURIComponent(contents);
		props.updateExport({"exportImage": datauri});

		const insertTimeline = event => {
			if(!props.hideTime) {
				var image = event.target;
				var svg = image.getBoundingClientRect();
				var position = (event.clientY - svg.top) * height / svg.height;
				props.updateOffsets({"top": svg.top, "height": svg.height});
				props.updateLines({"coordinate": position});
			}
		}
		
		var lineStuff = props.datapacks[props.whichImage].timelines.map((timeline, index) => { 
			return <Line key={index} id={index} width={width} y={timeline.y} height={height}/>;
		})
		
		return(
			<svg className = "mainImage" viewBox = {"0 0 " + width + " " + height} height = {height} width = {width} id = "sriramEditImage">
				<image className = "actualImage" xlinkHref = {props.datapacks[props.whichImage].backgroundImage.dataURL} onDoubleClick = {insertTimeline}/>
				{lineStuff}
			</svg>
		)
	}
);