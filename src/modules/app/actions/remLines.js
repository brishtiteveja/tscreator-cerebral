// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function remLines ({input, module}) {
	var position = input.position;
	var index = module.state.get('whichImage');
	var timelines = module.state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = numLines - 1;
	for(; i >= 0; i--) {
		module.state.pop('datapacks.' + index + '.timelines');
		if(i == position) {
			break;
		}
	}
	for(i = position + 1; i < numLines; i++) {
		module.state.push('datapacks.' + index + '.timelines', timelines[i]);
	}
	if(numLines - 1 == 0) {
		module.state.set('hideRef', false);
	}
}

export default remLines
