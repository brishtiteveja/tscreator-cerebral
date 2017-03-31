// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addLines ({input, state}) {
  	var y = input.coordinate;
	var index = state.get('whichImage');
	var timelines = state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = 0;
	for(; i < numLines; i++) {
		if(y > timelines[numLines - i - 1].y) {
			break;
		}
		else {
			state.pop('datapacks.' + index + '.timelines');
		}
	}
	state.push('datapacks.' + index + '.timelines', {"y": y, "name": "Line" + Math.round(y), "age": 0});
	for(; i > 0; i--) {
		state.push('datapacks.' + index + '.timelines', timelines[numLines - i]);
	}
}

export default addLines
