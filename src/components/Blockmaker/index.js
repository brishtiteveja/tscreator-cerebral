import React from 'react';
import BlockEditor from './BlockEditor';
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

  // Main render function:
}, props => {

	const retToApp = () => {
		props.showApp();
		props.showBlock();
	};

	if(props.display) {
		return (
			<div className="mainBlockGallery">
				<div className="blockEditor">
					<div className = "toolbar">
						<button onClick={retToApp}>Back</button>
					</div>
					<BlockEditor/>
					<div className = "toolbar">
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div></div>
		);
	}
});
