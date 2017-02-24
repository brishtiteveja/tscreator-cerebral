import React from 'react'
import {connect} from 'cerebral-view-react'
import style from '../function.css'
import EditList from '../EditList'
import ImageEdited from '../ImageEdited'
export default connect({
		preview: 'preview',
		editImage: 'editImage',
		titles: 'titles',
		whichImage: 'whichImage',
		imags: 'imags',
},	{
		previewTime: 'sriramPreviewClicked',
		backButton: 'sriramBackClicked',
},

	function EditorMain(props) {
		const prevClicked = () => {
			props.previewTime();
		}
		const backClicked = () => {
			props.backButton();
		}
		const checkDownload = () => {
			return (props.imags[props.whichImage]);
		}
		if(!props.preview && props.editImage) {
			return(
				<div className="mainEditGallery">
					<EditList/>
					<div className="imageEditor">
						<div className = "toolbar">
							<button onClick = {backClicked}>Back</button>
							<button onClick = {prevClicked}>Preview</button>
						</div>
						<div className = "anvil">
							<ImageEdited title = {props.titles[props.whichImage]}/>
						</div>
						<div className = "toolbar">
							<a id = "exportLink" href= {checkDownload()} download = {props.titles[props.whichImage]}>Export Image</a>
						</div>
					</div>
				</div>
			)
		} else {
			return(
				<div></div>
			)
		}
	}
);
