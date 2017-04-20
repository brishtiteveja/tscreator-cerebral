import React from 'react';
import Draggable from 'react-draggable';
import {connect} from 'cerebral-view-react';

import './BlockBoundary.css';

export default connect({
},{

  boundaryMoveRequested: 'blockmaker.boundaryMoveRequested',

}, props => {

  const dragStopped = evt => {
    // evt.clientX holds the new x position
    props.boundaryMoveRequested({ 
      id: props.boundaryid,
      x: evt.clientX,
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
