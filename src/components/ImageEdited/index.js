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
			<svg className = "mainImage" viewBox = "0 0 1000 1000">
				<image className = "actualImage" xlinkHref = {props.imags[props.chosen]}/>
			</svg>
		)
	}
);
