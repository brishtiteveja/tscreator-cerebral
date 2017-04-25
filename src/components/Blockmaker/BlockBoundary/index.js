import React from 'react';
import Draggable from 'react-draggable';
import {connect} from 'cerebral-view-react';

import './BlockBoundary.css';

export default connect({
	width: 'blockmaker.width',
	left: 'blockmaker.left',
	datapacks: 'app.datapacks',
	whichImage: 'app.whichImage',
},{

  boundaryMoveRequested: 'blockmaker.boundaryMoveRequested',

}, props => {

  const dragStopped = evt => {
	var myImage = new Image();
	myImage.src = props.datapacks[props.whichImage].backgroundImage.dataURL;
	var height = myImage.height;
	var width = myImage.width;
    var position = (evt.clientX - props.left) * width / props.width;
    props.boundaryMoveRequested({ 
      id: props.boundaryid,
      x: position,
    });
  };

  return (
    <Draggable onStop={dragStopped} axis='x' position={{x: props.x, y: 0}}>
      <line 
        className='boundary'
        x1={0} y1="0"
        x2={0} y2="600"
        strokeWidth='2'
        stroke='green'
      />
    </Draggable>
  );
});
