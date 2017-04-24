import React from 'react'
import {connect} from 'cerebral-view-react'
import './EditorMain.css'
import EditList from '../EditList'
import ImageEdited from '../ImageEdited'
import LineList from '../LineList'

export default connect({
		preview: 'app.preview',
		editImage: 'app.editImage',
		titles: 'app.titles',
		whichImage: 'app.whichImage',
		imags: 'app.imags',
		exportImage: 'app.currentExport',
		showList: 'app.hideEditList',
		displayApp: 'app.displayApp',
},	{
		previewTime: 'app.sriramPreviewClicked',
		backButton: 'app.sriramBackClicked',
		hideList: 'app.sriramHideList',
		hideTime: 'app.sriramHideTime',
		showApp: 'app.sriramShowApp',
		showBlock: 'blockmaker.showBlockMakerRequested',
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
		const openBlockMaker = () => {
			props.showApp();
			props.showBlock();
		}
		if(!props.preview && props.editImage && props.displayApp) {
			return(
				<div className="mainEditGallery">
					<EditList/>
					<button onClick = {hideTheList}></button>
					<div className="imageEditor">
						<div className = "toolbar">
							<button onClick = {backClicked}>Back</button>
							<button onClick = {hideTheTime}>Timelines</button>
							<button onClick = {openBlockMaker}>Blockmaker</button>
							<button onClick = {prevClicked}>Preview</button>
						</div>
						<div className = "anvil">
							<ImageEdited title = {props.titles[props.whichImage]}/>
							<LineList/>
						</div>
						<div className = "toolbar">
							<a id = "exportLink" href= {checkDownload()} download = {props.titles[props.whichImage] + ".json"}>Export Datapack</a>
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
