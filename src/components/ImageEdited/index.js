import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		imags: 'imags',
		chosen: 'whichImage',
	},	
	{
	},

	function ImageEdited(props) {
		var myImage = new Image();
		myImage.src = props.imags[props.chosen];
		var height = myImage.height;
		var width = myImage.width;

		const insertTimeline = event => {
			console.log(event.clientX);
		}

		return(
			<svg className = "mainImage" viewBox = {"0 0 " + width + " " + height} height = {height} width = {width} onDoubleClick = {insertTimeline}>
				<image className = "actualImage" xlinkHref = {props.imags[props.chosen]}/>
				<line x1 = "0" x2 = {width} y1 = {5*height/8} y2 = {5*height/8} stroke = "red" strokeWidth = "2"/>
			</svg>
		)
	}
);
