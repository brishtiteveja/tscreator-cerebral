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
		blockDesc: 'blockmaker.blockDesc',
	},	
	{
		updateLines: 'app.sriramLineClicked',
		updateExport: 'app.sriramExportImage',
		changeName: 'blockmaker.changeNameRequested',
		changeAge: 'app.sriramChangeLineAge',
		deleteLine: 'app.sriramDeleteLines',
		chooseColor: 'blockmaker.chooseColorRequested',
		chooseBlock: 'blockmaker.blockChosen',
		changeContent: 'blockmaker.changeContentRequested',
	},

	function BlockInfo(props) {
		const chooseCol = event => {
			props.chooseColor({id: props.id});
		}
		const onLineNameChange = event => {
			props.changeName({"name": event.target.value, "id": props.id});
		}
		const expandBlock = event => {
			props.chooseBlock({"num": props.id});
		}
		const collapseBlock = event => {
			props.chooseBlock({"num": -1});
		}
		const updateContent = event => {
			props.changeContent({"text": event.target.value, "id": props.id});
		}
		
		if(props.id != props.blockDesc) {
			return(
				<div className="blockInfo">
					<form>
						<button onClick={expandBlock} type="button">E</button>
					</form>
					<form>
						Name: <input type="text" value={props.name} onChange={onLineNameChange} size="4"></input>
					</form>
					Color: <div className = "colorClip" style={{backgroundColor: props.hex}} onClick={chooseCol}></div>
				</div>
			)
		} else {
			return(
				<div className="blockInfo2">
					<div className="blockInfo3">
						<form>
							<button onClick={collapseBlock} type="button">E</button>
						</form>
						<form>
							Name: <input type="text" value={props.name} onChange={onLineNameChange} size="4"></input>
						</form>
						Color: <div className = "colorClip" style={{backgroundColor: props.hex}} onClick={chooseCol}></div>
					</div>
					<form className="temp" onChange={updateContent}>
						<textarea className="temp2" value={props.textContent}></textarea>
					</form>
				</div>
			)
		}
	}
);
