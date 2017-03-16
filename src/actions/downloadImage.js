// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, state}) {
  	var src = input.exportImage;
	state.set('currentExport', src);
}

export default importFile
