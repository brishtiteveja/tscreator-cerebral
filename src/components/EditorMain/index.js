import React from 'react'
import {connect} from 'cerebral-view-react'
import style from '../function.css'
import EditList from '../EditList'
import ImageEdited from '../ImageEdited'
export default connect({
		preview: 'preview',
		editImage: 'editImage',
		editList: 'editList',
		whichImage: 'whichImage'
},	{
		previewTime: 'sriramPreviewClicked',
		backButton: 'sriramBackClicked',
},

	function EditorMain(props) {
		const prevClicked = () => {
			props.previewTime();
		}
		if(!props.preview && props.editImage) {
			return(
				<div className="mainEditGallery">
					<EditList/>
					<div className="imageEditor">
						<div className = "toolbar">
							<button>Back</button>
							<button onClick = {prevClicked}>Preview</button>
						</div>
						<div className = "anvil">
							<ImageEdited title = {props.editList[props.whichImage]}/>
						</div>
						<div className = "toolbar"></div>
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
