import React from 'react'
import Draggable from 'react-draggable'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
export default connect(
	{
		whichImage: 'whichImage',
		datapacks: 'datapacks',
		hideTime: 'hideTimeList',
		svgTop: 'svgTop',
		svgHeight: 'svgHeight',
	},	
	{
		updateLines: 'sriramLineClicked',
		updateExport: 'sriramExportImage',
		dragLine: 'sriramDragLine',
	},

	function Line(props) {
		var topBound = 0;
		var botBound = props.svgHeight;
		if(props.id > 0) {
			topBound = props.datapacks[props.whichImage].timelines[props.id - 1].y;
		}
		if(props.id < props.datapacks[props.whichImage].timelines.length - 1) {
			botBound = props.datapacks[props.whichImage].timelines[props.id + 1].y;
		}
		const stoppedDrag = event => {
			var position = (event.clientY - props.svgTop) * props.height / props.svgHeight;
			if(position >= botBound) {
				position = botBound - 3;
			}
			if(position <= topBound) {
				position = topBound + 3;
			}
			props.dragLine({"y": position, "id": props.id});
		}
		return (
			<Draggable axis='y' position={{x: 0, y: props.y}} bounds={{left: 0, right:0, top: topBound + 3, bottom: botBound - 3}} onStop={stoppedDrag}>
				<line className='timeline' x1 = "0" x2 = {props.width} y1 = "0" y2 = "0" stroke = "red" strokeWidth = "2"/>
			</Draggable>
		);
	}
);
