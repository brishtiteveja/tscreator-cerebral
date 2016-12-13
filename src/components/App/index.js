import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import ColChooser from '../ColChooser'
import ColumnList from '../ColumnList'
export default connect({
		items: 'items',
		display: 'displayMenu'
		
},	{
		addColumnClicked: 'sriramNewColumnRequested',
		exportClicked: 'sriramExportClicked',
	},

	function App(props) {

		const checkDownload = event => {
			props.exportClicked();
		}

		const addColumnButton = event => {
			props.addColumnClicked();
		}
		return(
			<div className="outer">
				<button type = "button" onClick = {addColumnButton}>Add Column</button>
				<button type = "button" onClick = {checkDownload}>Export</button>
				<ColumnList/>
				<ColChooser/>
	      		</div>
		)
	}
);
