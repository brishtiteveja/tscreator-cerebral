import React from 'react'
import Dropzone from 'react-dropzone'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import TNList from '../TNList'
export default connect(
	{
	},	
	{
	},

	function Gallery(props) {
		const onDropFile = (acceptedFiles) => {
			var reader = new FileReader();
		}
		return(
				<Dropzone
					disableClick = {true}
					accept = "image/*"
					multiple = {false}
					onDrop = {onDropFile}>
					<TNList/>
				</Dropzone>
		)
	}
);
