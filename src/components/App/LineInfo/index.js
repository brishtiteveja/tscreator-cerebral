import React from 'react'
import {connect} from 'cerebral-view-react'
import './LineInfo.css'

export default connect(
	{
		imags: 'app.imags',
		chosen: 'app.whichImage',
		lines: 'app.lines',
		whichImage: 'app.whichImage',
		datapacks: 'app.datapacks',
	},	
	{
		updateLines: 'app.sriramLineClicked',
		updateExport: 'app.sriramExportImage',
		changeName: 'app.sriramChangeLineName',
		changeAge: 'app.sriramChangeLineAge',
		deleteLine: 'app.sriramDeleteLines',
	},

	function LineInfo(props) {
		const onLineNameChange = event => {
			props.changeName({"name": event.target.value, "id": props.id});
		}
		const onLineAgeChange = event => {
			props.changeAge({"age": event.target.value, "id": props.id});
		}
		const deleteLine = event => {
			props.deleteLine({"position": props.id});
		}
		return(
			<div className="lineInfo">
				<form>
					Name: <input type="text" value={props.name} onChange={onLineNameChange} size="4"></input>
				</form>
				<form>
					Age: <input type="text" value={props.age.toString()} onChange={onLineAgeChange} size="1"></input>
				</form>
				<form>
					<button onClick={deleteLine} type="button">D</button>
				</form>
			</div>
		)
	}
);
