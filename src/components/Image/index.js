import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		imags: 'imags',
	},	
	{
			imageChosen: 'sriramImageClicked',
	},

	function Image(props) {
		const imClick = event => {
			props.imageChosen({"ID": props.imageId});
		}
		return(
			<div className = "image">
				<img className = "actualImage" onClick = {imClick} src = {props.imags[props.imageId]}/>
				{props.title}
			</div>
		)
	}
);
