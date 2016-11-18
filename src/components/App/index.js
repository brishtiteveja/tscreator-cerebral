import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'./function.css'
export default connect(
		{},
		{},
		function App() {
			var num = 0;
			const addColumn = event => {
				var container = document.getElementById("container");
				container.innerHTML += '<div class="column"></div>';
				console.log(container.innerHTML);
			}
			const tsc = () => {	
				return(
					<div className="outer">
						<button type="button" onClick={addColumn}>Add Column</button>
						<div id="container" className="inner">
						</div>	
		      			</div>
				)
			}
			return (
				tsc()	
		       	)
		}
);
