import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'./function.css'
export default connect(
		{},
		{},
		function App() {
			const addColumn = event => {
				var container = document.getElementById("container");
				container.insertAdjacentHTML('beforeend', '<div class="column"></div>');
			}
			const remColumn = event => {
				var container = document.getElementById("container");
				container.removeChild(container.lastChild);
			}
			const tsc = () => {	
				return(
					<div className="outer">
						<button type="button" onClick={addColumn}>Add Column</button>
						<button type = "button" onClick={remColumn}>Remove Column</button>
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
