import React from 'react';
import BlockEditor from './BlockEditor';
import BlockList from './BlockList';
import ColorChooser from './ColorChooser'
import {connect} from 'cerebral-view-react';
import './index.css'

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
  allowBlock: 'blockmaker.allowAddBlockRequested',

  // Main render function:
}, props => {

	const retToApp = () => {
		props.showApp();
		props.showBlock();
	};
	
	const addBlocks = () => {
		props.allowBlock();
	}

	if(props.display) {
		return (
			<div className = "outer">
				<div className="mainBlockGallery">
					<div className="blockEditor">
						<div className = "toolbar">
							<button onClick={retToApp}>Back</button>
							<button onClick={addBlocks}>Block</button>
						</div>
						<BlockEditor/>
						<div className = "toolbar">
						</div>
					</div>
					<BlockList/>
				</div>
				<ColorChooser/>
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}
});
