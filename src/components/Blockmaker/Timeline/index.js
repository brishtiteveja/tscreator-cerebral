import React from 'react';
import Draggable from 'react-draggable';
import {connect} from 'cerebral-view-react';

import './Timeline.css'

export default connect({
},{
  timelineMoveRequested: 'blockmaker.timelineMoveRequested',
}, props => {

  const dragStopped = evt => {
    props.timelineMoveRequested({
      id: props.timelineid,
      y: evt.clientY,
    });
  };

  return (
    <Draggable axis='y' position={{x:0,y:props.y}} onStop={dragStopped}>
      <line
        className='timeline'
        x1='0'   y1={0}
        x2='600' y2={0}
        strokeWidth='2'
        stroke='red'
      />
    </Draggable>
  );
});
