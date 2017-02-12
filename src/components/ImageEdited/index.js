import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		imags: 'imags',
	},	
	{
	},

	function ImageEdited(props) {
		return(
			<div className = "mainImage">
				<img className = "actualImage" src = {props.imags[0]}/>
				<div className = "imageTitle" contentEditable = "true">
					{props.title}
				</div>
			</div>
		)
	}
);
