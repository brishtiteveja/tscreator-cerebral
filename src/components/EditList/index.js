import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import Thumbnail from '../Thumbnail'

export default connect({
	titles: 'titles'
},	
	{},

	function EditList(props) {
		var collectionThumbnails = props.titles.map((title, index) => { 
			return <Thumbnail key = {index} imageId = {index} title = {title}/>;
		})

		return(
			<div className = "editGallery">{collectionThumbnails}</div>
		)	
	}
);
