
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
			var bound1 = module.state.get('boundaries.' + i);
			var bound2 = module.state.get('boundaries.' + j);
			var column = {"left": bound1, "right": bound2, "name": "Column " + i, "backgroundColor": "#FFFFFF", "lines": [], "blocks": []};
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
					var block = {"top": bound1, "base": bound2, "left": left, "width": width, "description": "No description yet!", "name": "Block " + i, "backgroundColor": {r:0, g:0, b:255}, fill: "#0000FF", "colIndex": input.index};
					blocks.push(block);
				}
			}
			if(blocks.length) {
				module.state.set(['columns', input.index, 'blocks'], blocks);
			}
		}
	}
}

export const chooseCol = ({input,module}) => {
  module.state.set(['whichCol'], input.num);
  module.state.set(['blockDesc'], -1);
}

export const allowChooseColor = ({input, module}) => {
	module.state.set(['chooseColor'], !module.state.get(['chooseColor']));
	var temp = module.state.get(['whichCol']);
	module.state.set(['color'], module.state.get(['columns', temp, 'blocks', input.id, 'backgroundColor']));
	module.state.set(['blockColor'], input.id);
}

export const setStateColor = ({input, module}) => {
	module.state.set(['color'], input.color);
	module.state.set(['chooseColor'], false);
}

export const changeColor = ({input, module}) => {
module.state.set(['columns', module.state.get(['whichCol']), 'blocks', module.state.get(['blockColor']), 'backgroundColor'], module.state.get(['color', 'rgb']))
module.state.set(['columns', module.state.get(['whichCol']), 'blocks', module.state.get(['blockColor']), 'fill'], module.state.get(['color', 'hex']));
}

export const chooseBlock = ({input,module}) => {
  module.state.set(['blockDesc'], input.num);
}

export const changeContent = ({input,module}) => {
  module.state.set(['columns', module.state.get(['whichCol']), 'blocks', input.id, 'description'], input.text);
}

export const changeName = ({input,module}) => {
  module.state.set(['columns', module.state.get(['whichCol']), 'blocks', input.id, 'name'], input.name);
}

export const updateTextExport = ({input,module}) => {
	var text = "I don't know what the placeholder here is\r\n";
	var columns = module.state.get(['columns']);
	for(var i = 0; i < columns.length; i++) {
		var width = columns[i].right.x - columns[i].left.x;
		text += columns[i].name + "\t" + "block\t" + width + "\tUSGS-Named\r\n";
		text += "\tTOP\tn/a\t\t\t\r\n";
		for(var j = 0; j < columns[i].blocks.length; j++) {
			text += "\t" + columns[i].blocks[j].name + "\tn/a\tsolid\t\t" + columns[i].blocks[j].backgroundColor.r + "/" + columns[i].blocks[j].backgroundColor.g + "/" + columns[i].blocks[j].backgroundColor.b + "\r\n";
		}
	}
	module.state.set(['exportContent'], text);
}
