import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect({
	display: 'displayMenu'
},	
	{
		closeColumn: 'sriramColumnButtonClicked',
		curveColumn: 'sriramCurveColumn',
		treeColumn:  'sriramTreeColumn',
		blockColumn: 'sriramBlockColumn',
		transColumn: 'sriramTransColumn'	
	},

	function ColChooser(props) {

		const CurveTypeClicked = event => {
			props.curveColumn();
			props.closeColumn();
		}

		const BlockTypeClicked = event => {
			props.blockColumn();
			props.closeColumn();
		}

		const TreeTypeClicked = event => {
			props.treeColumn();
			props.closeColumn();
		}

		const TransectTypeClicked = event => {
			props.transColumn();
			props.closeColumn();
		}

		if(props.display) {
			return(
				<div className="chooser">
					Choose Column Type:
					<div className="innerchooser">
						<button type = "button" onClick = {CurveTypeClicked}>Curve</button>
						<button type = "button" onClick = {TreeTypeClicked}>Tree</button>
						<button type = "button" onClick = {BlockTypeClicked}>Block</button>
						<button type = "button" onClick = {TransectTypeClicked}>Transect</button>
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
