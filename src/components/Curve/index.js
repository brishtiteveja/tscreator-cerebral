import React from 'react'
import Dropzone from 'react-dropzone'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{},	
	{},

	function Curve() {
		const onDropFile = (acceptedFiles) => {
			for(var i = 0; i < acceptedFiles.length; i++) {
				console.log(acceptedFiles[i].name);
			}
		}
		const openCurve = event => {
			window.open("http://afternoon-sands-3534.herokuapp.com/curve_maker/");
		}
		return(
			<div className="column" onClick = {openCurve}>
				<Dropzone
					disableClick = {true}
					accept = "text/plain"
					onDrop = {onDropFile}>
				</Dropzone>
			</div>
		)
	}
);
