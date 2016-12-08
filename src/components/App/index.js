import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'./function.css'
export default connect(
	{},	
	{
		addColumn: 'sriramNewColumnRequested',
	},

	function App() {

		const addColumnButton = () => {
			var container = document.getElementById("container");
			container.insertAdjacentHTML('beforeend','<div class="column"></div>');
			/*var chooseColumn = window.open("","colChooser","height=200 width=400 left=450 top=300");
			chooseColumn.document.write("<TITLE>Column Chooser</TITLE>");
			chooseColumn.document.write('<button type="button" onClick={addCurveColumn}>Curve</button>');
			chooseColumn.document.write('<button type="button" onClick={addTreeColumn}>Tree</button>');
			chooseColumn.document.write('<button type="button" onClick={addBlockColumn}>Block</button>');
			chooseColumn.document.write('<button type="button" onClick={addTransectColumn}>Transect</button>');*/
		}
		const remColumn = event => {
			var container = document.getElementById("container");
			container.removeChild(container.lastChild);
		}
		return(
			<div className="outer">
				<button type = "button" onClick={addColumn}>Add Column</button>
				<button type = "button" onClick={remColumn}>Remove Column</button>
				<div id="container" className="inner">
				</div>	
	      		</div>
		)
	}
);
