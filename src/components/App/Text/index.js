import React from 'react'
import Dropzone from 'react-dropzone'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		contents: 'app.contents',
	},	
	{
		uploadContents: 'app.sriramFileDropped',
	},

	function Text(props) {
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
		if(props.contents[props.columnId].length == 0) {
			return(
				<Dropzone
					disableClick = {true}
					accept = "text/plain"
					onDrop = {onDropFile}>
				</Dropzone>
			)
		} else {
			return (
				<pre>
					{props.contents[props.columnId]}
				</pre>
			)
		}
	}
);
