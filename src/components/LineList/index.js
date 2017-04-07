import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import LineInfo from '../LineInfo'
import references from './references'

export default connect({
	datapacks: 'datapacks',
	hideTime: 'hideTimeList',
	whichImage: 'whichImage',
	setRef: 'hideRef',
},	
	{
		hideRef: 'sriramHideRef',
	},

	function EditList(props) {
		var collectionLines = props.datapacks[props.whichImage].timelines.map((timeline, index) => { 
			return<LineInfo key={index} name={timeline.name} age={timeline.age} id = {index}/>;
		})
		const useReferences = () => {
			props.hideRef();
		}
		const setReferences = () => {
			console.log("Hi");
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
						<form>
							Gap: <input type="text" value="50" size="1"></input>
						</form>
						<form>
							Start: <input type="text" value="0" size="1"></input>
						</form>
					</div>
					<div className="lineInfo"></div>
					<div className="lineInfo"></div>
					<form className="refInfo" onChange={setReferences}>
						<div className="choiceInfo">
							<input type="radio" name="refType" value="Period"></input>Period
						</div>
						<div className="choiceInfo">
							<input type="radio" name="refType" value="Epoch"></input>Epoch
						</div>
						<div className="choiceInfo">
							<input type="radio" name="refType" value="Stage"></input>Stages
						</div>
					</form>
					<button type="button">Ready</button>
				</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
