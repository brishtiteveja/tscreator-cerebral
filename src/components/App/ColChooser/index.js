import React from 'react'
import {connect} from 'cerebral-view-react'
import './ColChooser.css'

export default connect({
	display: 'app.displayMenu'
},	
	{
		closeColumn: 'app.sriramColumnButtonClicked',
		curveColumn: 'app.sriramCurveColumn',
		treeColumn:  'app.sriramTreeColumn',
		blockColumn: 'app.sriramBlockColumn',
		transColumn: 'app.sriramTransColumn'	
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
