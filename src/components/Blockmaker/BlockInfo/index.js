import React from 'react'
import {connect} from 'cerebral-view-react'
import './BlockInfo.css'

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
		chooseColor: 'blockmaker.chooseColorRequested',
	},

	function BlockInfo(props) {
		const chooseCol = event => {
			props.chooseColor({id: props.id});
		}
		const onLineNameChange = event => {
			props.changeAge({"age": event.target.value, "id": props.id});
		}
		const deleteLine = event => {
			props.deleteLine({"position": props.id});
		}
		return(
			<div className="blockInfo">
				<form>
					<button onClick={deleteLine} type="button">E</button>
				</form>
				<form>
					Name: <input type="text" value={props.name} onChange={onLineNameChange} size="4"></input>
				</form>
				Color: <div className = "colorClip" style={{backgroundColor: props.hex}} onClick={chooseCol}></div>
			</div>
		)
	}
);
