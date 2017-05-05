import React from 'react';
import Timeline from '../Timeline';
import BlockBoundary from '../BlockBoundary';
import Column from '../Column';
import Block from '../Block';
import {connect} from 'cerebral-view-react';
import './BlockEditor.css'

export default connect({

  // state:
     bgimage: 'blockmaker.bgimage',
  boundaries: 'blockmaker.boundaries',
     display: 'blockmaker.displayBlock',
	 datapacks: 'app.datapacks',
	 whichImage: 'app.whichImage',
	 columns: 'blockmaker.columns',
	 addBlock: 'blockmaker.addBlock',
	 blocks: 'blockmaker.blocks',
	 lines: 'blockmaker.lines',

},{

  // signals:
  newBlockBoundaryRequested: 'blockmaker.newBlockBoundaryRequested',
  showApp: 'app.sriramShowApp',
  showBlock: 'blockmaker.showBlockMakerRequested',
  updateOffsets: 'blockmaker.updateOffsetsRequested',
  newBlockLineRequested: 'blockmaker.newBlockLineRequested',

  // Main render function:
}, props => {

	var myImage = new Image();
	if(props.whichImage < 0) {
		myImage.src = props.bgimage;
	}
	else {
		myImage.src = props.datapacks[props.whichImage].backgroundImage.dataURL;
	}
	var height = myImage.height;
	var width = myImage.width;
	
	const dropBlockBoundary = evt => {
		if(!props.addBlock) {
			const dim = evt.target.getBoundingClientRect();
			var position = (evt.clientX - dim.left) * width / dim.width;
			props.updateOffsets({"left": dim.left, "width": dim.width});
			props.newBlockBoundaryRequested({index: 0, x: position});
		}
	};

	var colStuff = props.columns.map((column, index) => { 
		return <Column key={index} index = {index} x={column.left.x} width={column.right.x - column.left.x} height={height}/>;
	})
	
	var blockStuff = props.blocks.map((block, index) => { 
		return <Block key={index} x={block.left} y={block.top.y} width={block.width} height={block.base.y - block.top.y}/>;
	})
	
	if(!props.addBlock) {
		return (
			<div className = "anvil">
				<svg width={width} height={height} onDoubleClick={dropBlockBoundary}>
					{colStuff}
					<image x="0" y="0" xlinkHref={myImage.src} />
					{props.datapacks[props.whichImage].timelines.map((t,i) => <Timeline key={'timeline'+i} timelineid={i} y={t.y} />)}
					{props.boundaries.map((b,i) => <BlockBoundary key={'blockboundary'+i} boundaryid={i} x={b.x} />)}
				</svg>
			</div>
		);
	} else {
		return (
			<div className = "anvil">
				<svg width={width} height={height} onDoubleClick={dropBlockBoundary}>
					<image x="0" y="0" xlinkHref={myImage.src}/>
					{props.datapacks[props.whichImage].timelines.map((t,i) => <Timeline key={'timeline'+i} timelineid={i} y={t.y} />)}
					{props.boundaries.map((b,i) => <BlockBoundary key={'blockboundary'+i} boundaryid={i} x={b.x} />)}
					{colStuff}
					{blockStuff}
				</svg>
			</div>
		);
	}
});
