import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import ColChooser from '../ColChooser'
import ColumnList from '../ColumnList'
export default connect({
		contents: 'contents',
		preview: 'preview',
		editImage: 'editImage'
},	{
		addColumnClicked: 'sriramNewColumnRequested',
		exportClicked: 'sriramExportClicked',
		goToImage: 'sriramImageClicked',
	},

	function Preview(props) {
		const addColumnButton = event => {
			props.addColumnClicked();
		}
		const backButton = event => {
			props.goToImage();
		}
		if(props.preview && !props.editImage) {
			return(
				<div className="outer">
					<button type = "button" onClick = {addColumnButton}>Add Column</button>
					<button onClick = {backButton}>Back</button>
					<ColumnList/>
					<ColChooser/>
	      		</div>
			)
		} else {
			return(
				<div></div>
			)
		}
	}
);
