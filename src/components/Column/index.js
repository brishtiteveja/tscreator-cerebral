import React from 'react'
import Text from '../Text'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{
		uploadContents: 'sriramFileDropped',
	},

	function Column(props) {
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
		const openColumn = event => {
			if(props.type == "Block") {
				window.open("http://afternoon-sands-3534.herokuapp.com/block_column_maker/html/block_column_maker_min.html");
			}
			else if(props.type == "Curve") {
				window.open("http://afternoon-sands-3534.herokuapp.com/curve_maker/");
			}
			else if(props.type == "Tree") {
				window.open("http://afternoon-sands-3534.herokuapp.com/evtree_maker/html/index.html");
			}
			else if(props.type == "Transect") {
				window.open("http://afternoon-sands-3534.herokuapp.com/transect_maker/html/transect_min.html");
			}
			else {
				window.open("http://afternoon-sands-3534.herokuapp.com");
			}
		}
		return(
			<div className="column" onClick = {openColumn}>
				{props.type}
				<Text columnId = {props.columnId} />
			</div>
		)
	}
);
