import React from 'react'
import {connect} from 'cerebral-view-react'
import './BlockList.css'
import BlockInfo from '../BlockInfo'

export default connect({
	datapacks: 'app.datapacks',
	hideTime: 'app.hideTimeList',
	whichImage: 'app.whichImage',
	setRef: 'app.hideRef',
	refOption: 'app.refOption',
	addBlock: 'blockmaker.addBlock',
	columns: 'blockmaker.columns',
	whichCol: 'blockmaker.whichCol',
},	
	{
		hideRef: 'app.sriramHideRef',
		changeOption: 'app.sriramChangeOption',
	},

	function BlockList(props) {
		var collectionBlocks = [];
		if(props.whichCol >= 0) {
			collectionBlocks = props.columns[props.whichCol].blocks.map((block, index) => { 
				return<BlockInfo key={index} name={block.name} age={block.width} hex={block.fill} id = {index}/>;
			});
		}
		const useReferences = () => {
			props.hideRef();
		}
		const optionChanged = event => {
			props.changeOption({"opt": event.target.value});
		}
		if(props.addBlock) {
			return(
				<div className="timeGallery">
					COLUMN {props.whichCol}
					{collectionBlocks}
				</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
