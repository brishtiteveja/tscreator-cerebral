import React from 'react'
import Text from '../Text'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{
		uploadContents: 'sriramFileDropped',
	},

	function Transect(props) {
		const onDropFile = (acceptedFiles) => {
			var reader = new FileReader();

			reader.onload = function(event) {
				var contents = event.target.result;
				props.uploadContents({"ID": props.columnId, "con": contents});
			}

			for(var i = 0; i < acceptedFiles.length; i++) {
				reader.readAsText(acceptedFiles[i]);
			}
		}
		const openTransect = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/transect_maker/html/transect_min.html");
		}
		return(
			<div className="column" onClick = {openTransect}>
				<Text columnId = {props.columnId} />
			</div>
		)
	}
);
