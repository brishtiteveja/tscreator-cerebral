import React from 'react';
import Timeline from './Timeline';
import BlockBoundary from './BlockBoundary';
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

  const dropBlockBoundary = evt => {
    const dim = evt.target.getBoundingClientRect();
    props.newBlockBoundaryRequested({
      x: evt.clientX - dim.left
    });
  };
  const retToApp = () => {
	props.showApp();
	props.showBlock();
  };
  
  var myImage = new Image();
  if(props.whichImage < 0) {
	  myImage.src = props.bgimage;
  }
  else {
	  myImage.src = props.datapacks[props.whichImage].backgroundImage.dataURL;
  }
  var height = myImage.height;
  var width = myImage.width;
  
  if(props.display) {
	  return (
		<div className="BlockMaker">
		  <svg width={width} height={height} onDoubleClick={dropBlockBoundary}>
			<image x="0" y="0" xlinkHref={myImage.src} />
			{props.datapacks[props.whichImage].timelines.map((t,i) => <Timeline key={'timeline'+i} timelineid={i} y={t.y} />)}
			{props.boundaries.map((b,i) => <BlockBoundary key={'blockboundary'+i} boundaryid={i} x={b.x} />)}
		  </svg>
		  <button onClick={retToApp}>Back</button>
		</div>
	  );
  } else {
	  return (
		<div></div>
	  );
  }
});
