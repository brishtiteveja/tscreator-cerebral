// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function remLines ({input, state}) {
	var position = input.position;
	var index = state.get('whichImage');
	var timelines = state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = numLines - 1;
	for(; i >= 0; i--) {
		state.pop('datapacks.' + index + '.timelines');
		if(i == position) {
			break;
		}
	}
	for(i = position + 1; i < numLines; i++) {
		state.push('datapacks.' + index + '.timelines', timelines[i]);
	}
}

export default remLines
