import React from 'react'
import Dropzone from 'react-dropzone'
import {connect} from 'cerebral-view-react'
import './Gallery.css'
import TNList from '../TNList'

export default connect(
	{
		imags: 'app.imags',
	},	
	{
		uploadContents: 'app.sriramFileDropped',
		uploadImageTitle: 'app.sriramImageTitleAdded',
	},

	function Gallery(props) {
		const onDropFile = (acceptedFiles) => {
			var reader = new FileReader();
			reader.onload = function(event) {
				var contents = event.target.result;
				props.uploadContents({"ID": 0, "con": contents});
			}

			for(var i = 0; i < acceptedFiles.length; i++) {
				reader.readAsDataURL(acceptedFiles[i]);
			}

			acceptedFiles.forEach((file) => {
				props.uploadImageTitle({"title": file.name.split(".")[0]});
			});
		}
		if(!props.imags.length) {
			return(
					<Dropzone
						className = "mainGalleryDrop2"
						activeClassName = "mainGalleryDropActive2"
						rejectClassName = "mainGalleryDropReject2"
						disableClick = {true}
						accept = "image/*"
						multiple = {false}
						onDrop = {onDropFile}>
						<TNList/>
					</Dropzone>
			)
		}
		else {
			return(
					<Dropzone
						className = "mainGalleryDrop"
						activeClassName = "mainGalleryDropActive"
						rejectClassName = "mainGalleryDropReject"
						disableClick = {true}
						accept = "image/*"
						multiple = {false}
						onDrop = {onDropFile}>
						<TNList/>
					</Dropzone>
			)
		}
	}
);
