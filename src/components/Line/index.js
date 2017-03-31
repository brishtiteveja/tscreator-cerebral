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
			const stoppedDrag = event => {
				var position = (event.clientY - props.svgTop) * props.height / props.svgHeight;
				props.dragLine({"y": position, "id": props.id})
			}
			return (
				<Draggable axis='y' position={{x: 0, y: props.y}} onStop={stoppedDrag}>
					<line className='timeline' x1 = "0" x2 = {props.width} y1 = "0" y2 = "0" stroke = "red" strokeWidth = "2"/>
				</Draggable>
			);
	}
);
