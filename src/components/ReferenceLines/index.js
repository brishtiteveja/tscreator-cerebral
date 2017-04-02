import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'

export default connect({
	datapacks: 'datapacks',
	hideTime: 'hideTimeList',
	whichImage: 'whichImage',
	setRef: 'setRef',
},	
	{},

	function EditList(props) {
		
		if(props.setRef) {
			return(
				<div className="timeGallery">
					REFERENCES
				</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
