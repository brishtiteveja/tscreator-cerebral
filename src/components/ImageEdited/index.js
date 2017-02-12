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
			<svg className = "mainImage">
				<image className = "actualImage" xlinkHref = {props.imags[0]}/>
				<line x1 = "0" y1 = "50" x2 = "900" y2 = "50" stroke = "red"/>
			</svg>
		)
	}
);
