// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addLines ({input, module}) {
  	var y = input.coordinate;
	var index = module.state.get('whichImage');
	var timelines = module.state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = 0;
	for(; i < numLines; i++) {
		if(y > timelines[numLines - i - 1].y) {
			break;
		}
		else {
			module.state.pop('datapacks.' + index + '.timelines');
		}
	}
	module.state.push('datapacks.' + index + '.timelines', {"y": y, "name": "Line" + Math.round(y), "age": 0});
	for(; i > 0; i--) {
		module.state.push('datapacks.' + index + '.timelines', timelines[numLines - i]);
	}
	if(!module.state.get('hideTime')) {
		module.state.set('hideRef', true);
	}
}

export default addLines
