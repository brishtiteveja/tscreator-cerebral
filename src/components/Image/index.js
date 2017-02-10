import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
	},	
	{
			imageChosen: 'sriramImageClicked',
	},

	function Image(props) {
		const imClick = event => {
			props.imageChosen({"ID": props.imageId});
		}
		return(
			<div className = "image" onClick = {imClick}>
				{props.title}
			</div>
		)
	}
);
