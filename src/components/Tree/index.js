import React from 'react'
import Text from '../Text'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{
		uploadContents: 'sriramFileDropped',
	},

	function Tree(props) {
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
		const openTree = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/evtree_maker/html/index.html");
		}
		return(
			<div className="column" onClick = {openTree}>
				<Text columnId = {props.columnId} />
			</div>
		)
	}
);
