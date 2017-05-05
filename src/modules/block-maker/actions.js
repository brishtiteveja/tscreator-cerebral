
export const addNewBlockBoundary = ({input,module}) => {
  var bounds = module.state.get('boundaries');
  var numBounds = bounds.length;
  var i = 0;
  for(; i < numBounds; i++) {
		if(input.x > bounds[numBounds - i - 1].x) {
			break;
		}
		else {
			module.state.pop('boundaries');
		}
	}
	module.state.push('boundaries', {"x": input.x});
	for(; i > 0; i--) {
		module.state.push('boundaries', bounds[numBounds - i]);
	}
}
export const moveBoundary = ({input,module}) => {
  module.state.set(['boundaries', input.id, 'x'], input.x);
}

export const addNewBlockLine = ({input,module}) => {
  var lines = module.state.get(['columns', input.index, 'lines']);
  var numBlocks = lines.length;
  var i = 0;
  for(; i < numBlocks; i++) {
		if(input.y > lines[numBlocks - i - 1].y) {
			break;
		}
		else {
			module.state.pop(['columns', input.index, 'lines']);
		}
	}
	module.state.push(['columns', input.index, 'lines'], {"y": input.y});
	for(; i > 0; i--) {
		module.state.push(['columns', input.index, 'lines'], lines[numBlocks - i]);
	}
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
	var i = 0;
	var columns = [];
	var numBounds = module.state.get('boundaries').length;
	for(i = 0; i < numBounds; i++) {
		var j = i + 1;
		if(j < numBounds) {
			console.log(numBounds);
			var bound1 = module.state.get('boundaries.' + i);
			var bound2 = module.state.get('boundaries.' + j);
			var column = {"left": bound1, "right": bound2, "name": "Column" + i, "backgroundColor": "#FFFFFF", "lines": [], "blocks": []};
			columns.push(column);
		}
	}
	module.state.set('columns', columns);
}

export const allowAddBlocks = ({input, module}) => {
	module.state.set(['addBlock'], !module.state.get(['addBlock']));
}

export const updateBlocks = ({input, module}) => {
	var i = input.index;
	var blocks = [];
	var left = 0;
	var width = 0;
	var numLines = module.state.get(['columns']).length;
	if(numLines > input.index) {
		numLines = module.state.get(['columns', i, 'lines']).length;
		if(numLines > 1) {
			left = module.state.get('boundaries.' + i + '.x');
			var j = i + 1;
			width = module.state.get('boundaries.' + j + '.x') - left;
			for(i = 0; i < numLines; i++) {
				j = i + 1;
				if(j < numLines) {
					var bound1 = module.state.get(['columns', input.index, 'lines', i]);
					var bound2 = module.state.get(['columns', input.index, 'lines', j]);
					console.log(bound1);
					var block = {"top": bound1, "base": bound2, "left": left, "width": width, "name": "Block" + i, "backgroundColor": "#FFFFFF"};
					blocks.push(block);
				}
			}
			if(blocks.length) {
				module.state.set(['columns', input.index, 'blocks'], blocks);
			}
		}
	}
	
	numLines = module.state.get(['columns']).length;
	for(i = 0; i < numLines; i++) {
		if(module.state.get(['columns', i, 'blocks']).length) {
			module.state.concat('blocks', module.state.get(['columns', i, 'blocks']));
		}
	}
}
