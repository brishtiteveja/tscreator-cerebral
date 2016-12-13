import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{},

	function Tree() {
		const openTree = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/evtree_maker/html/index.html");
		}
		return(
			<div className="column" onClick = {openTree}>Tree</div>
		)
	}
);
