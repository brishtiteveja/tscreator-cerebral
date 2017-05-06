import React from 'react'
import {connect} from 'cerebral-view-react'
import './LineList.css'
import LineInfo from '../LineInfo'

export default connect({
	datapacks: 'app.datapacks',
	hideTime: 'app.hideTimeList',
	whichImage: 'app.whichImage',
	setRef: 'app.hideRef',
	refOption: 'app.refOption',
	topBound: 'app.topBound',
	baseBound: 'app.baseBound',
},	
	{
		hideRef: 'app.sriramHideRef',
		changeOption: 'app.sriramChangeOption',
		changeTopBound: 'app.sriramChangeTop',
		changeBaseBound: 'app.sriramChangeBase',
		hideRef: 'app.sriramHideRef',
	},

	function LineList(props) {
		var collectionLines = props.datapacks[props.whichImage].timelines.map((timeline, index) => { 
			return<LineInfo key={index} name={timeline.name} age={timeline.age} id = {index}/>;
		})
		const useReferences = () => {
			props.hideRef();
		}
		const optionChanged = event => {
			props.changeOption({"opt": event.target.value});
		}
		const onTopBoundChange = event => {
			props.changeTopBound({"bound": event.target.value});
		}
		
		const onBaseBoundChange = event => {
			props.changeBaseBound({"bound": event.target.value});
		}
		
		const onSuccess = event => {
			props.hideRef();
		}
		
		if(!props.hideTime && props.setRef) {
			return(
				<div className="timeGallery">
					TIMELINES
					{collectionLines}
				</div>
			)
		} else if(!props.hideTime && !props.setRef){
			return(
				<div className="timeGallery">
					PRESETS
					<div className="lineInfo"></div>
					<div className="lineInfo">
						<form>
							Top: <input type="text" value={props.topBound.toString()} onChange={onTopBoundChange} size="1"></input>
						</form>
						<form>
							Base: <input type="text" value={props.baseBound.toString()} onChange={onBaseBoundChange} size="1"></input>
						</form>
					</div>
					<div className="lineInfo"></div>
					<div className="lineInfo"></div>
					<form className="refInfo">
						<label className="choiceInfo">
							<input type="radio" name="refType" value="Period" checked={props.refOption=="Period"} onChange={optionChanged}></input>
							Period
						</label>
						<label className="choiceInfo">
							<input type="radio" name="refType" value="Epoch" checked={props.refOption=="Epoch"} onChange={optionChanged}></input>
							Epoch
						</label>
						<label className="choiceInfo">
							<input type="radio" name="refType" value="Stage" checked={props.refOption=="Stage"} onChange={optionChanged}></input>
							Stage
						</label>
						<label className="choiceInfo">
							<input type="radio" name="refType" value="None" checked={props.refOption=="None"} onChange={optionChanged}></input>
							None
						</label>
					</form>
					<button type="button" onClick={onSuccess}>Looks Good!</button>
				</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
