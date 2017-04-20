// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateZones ({input, module}) {
	var index = module.state.get('whichImage');
	var timelines = module.state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = 0;
	var zones = [];
	numLines = module.state.get('datapacks.' + index + '.timelines').length;
	for(i = 0; i < numLines; i++) {
		var j = i + 1;
		if(j < numLines) {
			var timeline1 = module.state.get('datapacks.' + index + '.timelines.' + i);
			var timeline2 = module.state.get('datapacks.' + index + '.timelines.' + j);
			var zone = {"top": timeline1, "base": timeline2, "name": "Zone" + i, "description": null, "backgroundColor": "#FFFFFF"};
			zones.push(zone);
		}
	}
	module.state.set('datapacks.' + index + '.zones', zones);
}

export default updateZones
