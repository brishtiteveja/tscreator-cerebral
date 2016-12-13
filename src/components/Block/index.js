import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{},

	function Block() {
		const openBlock = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/block_column_maker/html/block_column_maker_min.html");
		}
		return(
			<div className="column" onClick = {openBlock}>Block</div>
		)
	}
);
