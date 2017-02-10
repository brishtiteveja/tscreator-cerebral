import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
	},	
	{
			imageChosen: 'sriramImageClicked',
	},

	function ImageE(props) {
		const imClick = event => {
			props.imageChosen({"ID": props.imageId});
		}
		return(
			<div className = "sideImage" onClick = {imClick}>
				{props.title}
			</div>
		)
	}
);
