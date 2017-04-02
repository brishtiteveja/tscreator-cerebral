import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import LineInfo from '../LineInfo'

export default connect({
	datapacks: 'datapacks',
	hideTime: 'hideTimeList',
	whichImage: 'whichImage',
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
		if(!props.hideTime) {
			return(
				<div className="timeGallery">
					TIMELINES
					<button onClick = {useReferences}>Add Reference Lines</button>
					{collectionLines}
				</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
