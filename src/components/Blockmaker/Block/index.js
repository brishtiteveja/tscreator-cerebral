import React from 'react';
import Timeline from '../Timeline';
import BlockBoundary from '../BlockBoundary';
import {connect} from 'cerebral-view-react';
import './Block.css'

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
  chooseCol: 'blockmaker.chooseColRequested',

  // Main render function:
}, props => {
	
	const changeCol = evt => {
		props.chooseCol({num: props.colIndex});
	}
	
	return (
		<rect x={props.x} y={props.y} width={props.width} height={props.height} style={{fill: props.hex}} className="block" onClick={changeCol}/>
	);
});
