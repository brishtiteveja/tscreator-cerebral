import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import LineInfo from '../LineInfo'

export default connect({
	datapacks: 'app.datapacks',
	hideTime: 'app.hideTimeList',
	whichImage: 'app.whichImage',
	setRef: 'app.hideRef',
	refOption: 'app.refOption',
},	
	{
		hideRef: 'app.sriramHideRef',
		changeOption: 'app.sriramChangeOption',
	},

	function EditList(props) {
		var collectionLines = props.datapacks[props.whichImage].timelines.map((timeline, index) => { 
			return<LineInfo key={index} name={timeline.name} age={timeline.age} id = {index}/>;
		})
		const useReferences = () => {
			props.hideRef();
		}
		const optionChanged = event => {
			props.changeOption({"opt": event.target.value});
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
							Top: <input type="text" value="0" size="1"></input>
						</form>
						<form>
							Base: <input type="text" value="15" size="1"></input>
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
						<button type="submit">Looks Good!</button>
					</form>
				</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
