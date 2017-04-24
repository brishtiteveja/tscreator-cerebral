import React from 'react'
import {connect} from 'cerebral-view-react'
import './GalleryMain.css'
import Gallery from '../Gallery'

export default connect({
		preview: 'app.preview',
		editImage: 'app.editImage',
		displayApp: 'app.displayApp',
},	{},

	function GalleryMain(props) {
		
		if(!props.preview && !props.editImage && props.displayApp) {
			return(
				<div className="mainImageGallery">
					TSCreator Datapack Maker
					<Gallery/>
				</div>
			)
		} else {
			return(
				<div></div>
			)
		}
	}
);
