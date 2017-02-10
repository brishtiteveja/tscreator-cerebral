import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import Thumbnail from '../Thumbnail'

export default connect({
	edits: 'editList'
},	
	{},

	function EditList(props) {
		var collectionThumbnails = props.edits.map((edit, index) => { 
			return <Thumbnail key = {index} imageId = {index} title = {edit}/>;
		})

		return(
			<div className = "editGallery">{collectionThumbnails}</div>
		)	
	}
);
