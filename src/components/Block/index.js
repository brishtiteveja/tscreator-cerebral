import React from 'react'
import Text from '../Text'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{
		uploadContents: 'sriramFileDropped',
	},

	function Block(props) {
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
		const openBlock = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/block_column_maker/html/block_column_maker_min.html");
		}
		return(
			<div className="column" onClick = {openBlock}>
				Block
				<Text columnId = {props.columnId} />
			</div>
		)
	}
);
