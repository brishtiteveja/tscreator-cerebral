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
	},

	function App(props) {

		const addColumnButton = event => {
			props.addColumnClicked();
		}
		return(
			<div className="outer">
				<button type = "button" onClick={addColumnButton}>Add Column</button>
				<ColumnList/>	
				<ColChooser/>
	      		</div>
		)
	}
);
