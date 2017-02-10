import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
	},	
	{
	},

	function ImageEdited(props) {
		return(
			<div className = "mainImage">
				{props.title}
			</div>
		)
	}
);
