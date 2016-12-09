import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{},

	function Transect() {
		const openTransect = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/transect_maker/html/transect_min.html");
		}
		return(
			<div className="column" onClick = {openTransect}></div>
		)
	}
);
