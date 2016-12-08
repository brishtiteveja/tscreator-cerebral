import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect({
	display: 'displayMenu'
},	
	{
		closeColumn: 'sriramColumnButtonClicked'	
	},

	function ColChooser(props) {

		const ColumnTypeClicked = event => {
			props.closeColumn();
		}

		if(props.display) {
			return(
				<div className="outer">
					<div className="inner">
						<button type = "button" onClick = {ColumnTypeClicked}>Curve</button>
						<button type = "button">Tree</button>
					</div>	
	      			</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}
);
