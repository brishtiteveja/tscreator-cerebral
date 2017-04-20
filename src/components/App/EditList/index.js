import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import Thumbnail from '../Thumbnail'

export default connect({
	titles: 'app.titles',
	hideList: 'app.hideEditList',
},	
	{},

	function EditList(props) {
		var collectionThumbnails = props.titles.map((title, index) => { 
			return <Thumbnail key = {index} imageId = {index} title = {title}/>;
		})

		if(!props.hideList) {
			return(
				<div className = "editGallery">{collectionThumbnails}</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
