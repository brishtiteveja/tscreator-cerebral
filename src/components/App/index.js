import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import ColChooser from '../ColChooser'
import ColumnList from '../ColumnList'
export default connect({
		items: 'items',
		display: 'displayMenu',
		contents: 'contents'
		
},	{
		addColumnClicked: 'sriramNewColumnRequested',
		exportClicked: 'sriramExportClicked',
	},

	function App(props) {

		const checkDownload = () => {
			var text = '';
			for(var i = 0; i < props.contents.length; i++) {
				text += encodeURIComponent(props.contents[i]);
			}
			return ('data:text/plain;charset=utf-8,' + text);
		}

		const addColumnButton = event => {
			props.addColumnClicked();
		}
		return(
			<div className="outer">
				<button type = "button" onClick = {addColumnButton}>Add Column</button>
				<a id = "exportLink" href= {checkDownload()} download = "datapack.txt">Export</a>
				<ColumnList/>
				<ColChooser/>
	      		</div>
		)
	}
);
