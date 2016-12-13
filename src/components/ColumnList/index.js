import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import Curve from '../Curve'
import Tree from '../Tree'
import Transect from '../Transect'
import Block from '../Block'

export default connect({
	items: 'items'
},	
	{},

	function ColumnList(props) {
		var collectionColumns = props.items.map((item, index) => { 
				if(item == "curve") {
					return <Curve key = {index} columnId = {index}/>;
				} else if (item == "tree") {
					return <Tree key = {index} columnId = {index}/>;
				} else if (item == "block") {
					return <Block key = {index} columnId = {index}/>;
				} else if (item == "trans") {
					return <Transect key = {index} columnId = {index}/>;
				} else {
					return <div className = "column" key = {index} columnId = {index}></div>;
				}
		})

		return(
			<div className = "inner">{collectionColumns}</div>
		)	
	}
);
