import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		imags: 'imags',
		chosen: 'whichImage',
		lines: 'lines',
		whichImage: 'whichImage',
		datapacks: 'datapacks',
	},	
	{
		updateLines: 'sriramLineClicked',
		updateExport: 'sriramExportImage',
		changeName: 'sriramChangeLineName',
		changeAge: 'sriramChangeLineAge',
		deleteLine: 'sriramDeleteLines',
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
