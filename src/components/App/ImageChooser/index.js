import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
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

	function ImageChooser(props) {}

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
