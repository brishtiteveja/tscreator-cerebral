
export const addNewBlockBoundary = ({input,module}) => 
  module.state.push(['boundaries'], { x: input.x });

export const moveBoundary = ({input,module}) => {
  module.state.set(['boundaries', input.id, 'x'], input.x);
}

export const addNewBlockLine = ({input,module}) => {
  var index = 0;
  module.state.push(['lines'], { y: input.y });
}

export const moveTimeline = ({input,module}) => {
  module.state.set(['timelines', input.id, 'y'], input.y);
}

export const showBlockMaker = ({module}) => {
	var what = module.state.get(['displayBlock']);
	if(what) {
		module.state.set(['displayBlock'], false);
	}
	else {
		module.state.set(['displayBlock'], true);
	}
}

export const updateOffsets = ({input,module}) => {
  module.state.set(['width'], input.width);
  module.state.set(['left'], input.left);
}

export const updateColumns = ({input, module}) => {
	var index = 0;
	var i = 0;
	var columns = [];
	var numBounds = module.state.get('boundaries').length;
	for(i = 0; i < numBounds; i++) {
		var j = i + 1;
		if(j < numBounds) {
			var bound1 = module.state.get('boundaries.' + i);
			var bound2 = module.state.get('boundaries.' + j);
			var column = {"left": bound1, "right": bound2, "name": "Column" + i, "backgroundColor": "#FFFFFF"};
			columns.push(column);
		}
	}
	module.state.set('columns', columns);
}

export const allowAddBlocks = ({input, module}) => {
	module.state.set(['addBlock'], !module.state.get(['addBlock']));
}

export const updateBlocks = ({input, module}) => {
	var index = 0;
	var i = 0;
	var blocks = [];
	var numLines = module.state.get('lines').length;
	var left = module.state.get('boundaries.' + i + '.x');
	var j = i + 1;
	var width = module.state.get('boundaries.' + j + '.x') - left;
	for(i = 0; i < numLines; i++) {
		j = i + 1;
		if(j < numLines) {
			var bound1 = module.state.get('lines.' + i);
			var bound2 = module.state.get('lines.' + j);
			var block = {"top": bound1, "base": bound2, "left": left, "width": width, "name": "Block" + i, "backgroundColor": "#FFFFFF"};
			blocks.push(block);
		}
	}
	module.state.set('blocks', blocks);
}
