import React from 'react'
import {connect} from 'cerebral-view-react'
import './TNList.css'
import Thumbnail from '../Thumbnail'

export default connect({
	titles: 'app.titles'
},	
	{},

	function TNList(props) {
		var collectionThumbnails = props.titles.map((title, index) => { 
			return <Thumbnail key = {index} imageId = {index} title = {title}/>;
		})
		if(!props.titles.length) {
			var text = "Drag and Drop Images Here!";
			return(
				<div className = "gallery2">{text}</div>
			)
		}
		else {
			return(
				<div className = "gallery">{collectionThumbnails}</div>
			)
		}			
	}
);
