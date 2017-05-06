import React from 'react'
import {connect} from 'cerebral-view-react'
import { CirclePicker } from 'react-color'
import './ColorChooser.css'

export default connect({
	chooseColor: 'blockmaker.chooseColor',
	color: 'blockmaker.color',
	
},	
	{	
		colorChosen: 'blockmaker.colorChosen',
	},

	function ColorChooser(props) {
		
		const changeComplete = (color) => {
			props.colorChosen({color: color});
		}
		
		if(props.chooseColor) {
			return(
				<div className="chooser">
					<div className="innerchooser">
						<CirclePicker color={props.color} onChangeComplete={changeComplete}/>
					</div>
	      		</div>
			)
		} else {
			return(
				<div></div>
			)
		}
	}
);
