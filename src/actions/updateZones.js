// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateZones ({input, state}) {
	var index = state.get('whichImage');
	var timelines = state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = 0;
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

export default updateZones
