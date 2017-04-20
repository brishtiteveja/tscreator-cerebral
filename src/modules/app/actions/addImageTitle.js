// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, module}) {
  	var title = input.title;
	module.state.push('titles', title);
}

export default importFile
