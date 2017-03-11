// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, state}) {
  	var y = input.coordinate;
	var index = state.get('whichImage');
	state.push('lines', {"image": state.get("whichImage"), "y": y});
	state.push('datapacks.' + index + '.timelines', {"y": y, "name": "Line" + y});
}

export default importFile
