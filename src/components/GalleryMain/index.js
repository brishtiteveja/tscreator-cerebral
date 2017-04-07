import React from 'react'
import {connect} from 'cerebral-view-react'
import style from '../function.css'
import Gallery from '../Gallery'
export default connect({
		preview: 'preview',
		editImage: 'editImage'
},	{},

	function GalleryMain(props) {
		if(!props.preview && !props.editImage) {
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
