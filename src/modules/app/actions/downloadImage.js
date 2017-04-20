// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, module}) {
  	var src = input.exportImage;
	module.state.set('currentExport', src);
}

export default importFile
