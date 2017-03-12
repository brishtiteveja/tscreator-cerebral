// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addLines ({input, state}) {
  	var y = input.coordinate;
	var index = state.get('whichImage');
	state.push('lines', {"image": state.get("whichImage"), "y": y});
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
	state.push('datapacks.' + index + '.timelines', {"y": y, "name": "Line" + y});
	for(; i > 0; i--) {
		state.push('datapacks.' + index + '.timelines', timelines[numLines - i]);
	}
	var zones = [];
	numLines = state.get('datapacks.' + index + '.timelines').length;
	for(i = 0; i < numLines; i++) {
		var j = i + 1;
		if(j < numLines) {
			var timeline1 = state.get('datapacks.' + index + '.timelines.' + i);
			var timeline2 = state.get('datapacks.' + index + '.timelines.' + j);
			var zone = {"top": timeline1, "base": timeline2, "name": "Zone" + i, "description": null, "backgroundColor": "#FFFFFF"};
			zones.push(zone);
		}
	}
	state.set('datapacks.' + index + '.zones', zones);
}

export default addLines
