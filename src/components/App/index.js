import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'./function.css'
export default connect(
		{},
		{},
		function App() {
		const tsc = () => {	
		return(
			<div className="outer">	
				<div className="curve">
					<button type="button" >Curve</button>
				</div>
				<div className = "block">
					<button type="button" >Block</button>
				</div>
				<div className = "tree">
					<button type="button" >Tree</button>
				</div>
				<div className = "text">
					<button type="button" >Text</button>
				</div>
			</div>
		      )
		}

		return (
				tsc()	
		       )
		}
);
