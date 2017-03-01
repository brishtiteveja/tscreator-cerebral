// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, state}) {
  	var y = input.coordinate;
	state.push('lines', {"image": state.get("whichImage"), "y": y});
	state.set('currentExport', input.exportImage);
}

export default importFile
