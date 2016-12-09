import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{},

	function Curve() {
		const openCurve = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/curve_maker/");
		}
		return(
			<div className="column" onClick = {openCurve}></div>
		)
	}
);
