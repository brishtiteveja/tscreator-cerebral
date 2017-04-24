import React from 'react'
import {connect} from 'cerebral-view-react'
import './Image.css'

export default connect(
	{
		imags: 'app.imags',
	},	
	{
			imageChosen: 'app.sriramImageClicked',
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
