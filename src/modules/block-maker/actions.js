
export const addNewBlockBoundary = ({input,module}) => 
  module.state.push(['boundaries'], { x: input.x });

export const moveBoundary = ({input,module}) => {
  module.state.set(['boundaries', input.id, 'x'], input.x);
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
