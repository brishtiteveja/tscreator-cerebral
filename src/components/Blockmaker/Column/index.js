import React from 'react';
import Timeline from '../Timeline';
import BlockBoundary from '../BlockBoundary';
import {connect} from 'cerebral-view-react';
import './Column.css'

export default connect({

  // state:
     bgimage: 'blockmaker.bgimage',
  boundaries: 'blockmaker.boundaries',
     display: 'blockmaker.displayBlock',
	 datapacks: 'app.datapacks',
	 whichImage: 'app.whichImage',

},{

  // signals:
  newBlockBoundaryRequested: 'blockmaker.newBlockBoundaryRequested',
  showApp: 'app.sriramShowApp',
  showBlock: 'blockmaker.showBlockMakerRequested',
  updateOffsets: 'blockmaker.updateOffsetsRequested',
  newBlockLineRequested: 'blockmaker.newBlockLineRequested',
  chooseCol: 'blockmaker.chooseColRequested',

  // Main render function:
}, props => {
	
	const addBlock = evt => {
		const dim = evt.target.getBoundingClientRect();
		var position = (evt.clientY - dim.top) * props.height / dim.height;
		props.newBlockLineRequested({index: props.index, y: position});
	}
	
	const changeCol = evt => {
		props.chooseCol({num: props.index});
	}
	
	return (
		<rect x={props.x} y="0" width={props.width} height={props.height} className="column" onDoubleClick={addBlock} onClick={changeCol}/>
	);
});
