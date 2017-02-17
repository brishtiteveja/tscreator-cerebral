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
		return(
			<div className = "mainImage">
				<img className = "actualImage" src = {props.imags[props.chosen]}/>
			</div>
		)
	}
);
