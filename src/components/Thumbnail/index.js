import React from 'react'
import Image from '../Image'
import ImageE from '../ImageE'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		editImage: 'editImage'
	},	
	{},

	function Thumbnail(props) {
		if(props.title == "") {
			return(
				<div className = "place"></div>
			)
		} else {
			if(props.editImage) {
				return(
					<ImageE imageId = {props.imageId} title = {props.title}/>
				)
			} else {
				return(
					<Image imageId = {props.imageId} title = {props.title}/>
				)
			}
		}
	}	
);
