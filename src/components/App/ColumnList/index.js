import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import Column from '../Column'

export default connect({
	items: 'app.items'
},	
	{},

	function ColumnList(props) {
		var collectionColumns = props.items.map((item, index) => { 
				if(item == "Curve") {
					return <Column key = {index} columnId = {index} type = "Curve"/>;
				} else if (item == "Tree") {
					return <Column key = {index} columnId = {index} type = "Tree"/>;
				} else if (item == "Block") {
					return <Column key = {index} columnId = {index} type = "Block"/>;
				} else if (item == "Transect") {
					return <Column key = {index} columnId = {index} type = "Transect"/>;
				} else {
					return <div className = "column" key = {index} columnId = {index}></div>;
				}
		})

		return(
			<div className = "inner">{collectionColumns}</div>
		)	
	}
);
