import React from 'react'
import {connect} from 'cerebral-view-react'
import style from '../function.css'
import EditList from '../EditList'
import ImageEdited from '../ImageEdited'
import LineList from '../LineList'
import ReferenceLines from '../ReferenceLines'

export default connect({
		preview: 'preview',
		editImage: 'editImage',
		titles: 'titles',
		whichImage: 'whichImage',
		imags: 'imags',
		exportImage: 'currentExport',
		showList: 'hideEditList',
},	{
		previewTime: 'sriramPreviewClicked',
		backButton: 'sriramBackClicked',
		hideList: 'sriramHideList',
		hideTime: 'sriramHideTime',
},

	function EditorMain(props) {
		const prevClicked = () => {
			props.previewTime();
		}
		const backClicked = () => {
			props.backButton();
		}
		const checkDownload = () => {
			return(props.exportImage);
		}
		const hideTheList = () => {
			props.hideList();
		}
		const hideTheTime = () => {
			props.hideTime();
		}
		if(!props.preview && props.editImage) {
			return(
				<div className="mainEditGallery">
					<EditList/>
					<button onClick = {hideTheList}></button>
					<div className="imageEditor">
						<div className = "toolbar">
							<button onClick = {backClicked}>Back</button>
							<button onClick = {hideTheTime}>Timelines</button>
							<button onClick = {prevClicked}>Preview</button>
						</div>
						<div className = "anvil">
							<ImageEdited title = {props.titles[props.whichImage]}/>
						</div>
						<div className = "toolbar">
							<a id = "exportLink" href= {checkDownload()} download = {props.titles[props.whichImage] + ".json"}>Export Datapack</a>
						</div>
					</div>
					<LineList/>
					<ReferenceLines/>
				</div>
			)
		} else {
			return(
				<div></div>
			)
		}
	}
);
