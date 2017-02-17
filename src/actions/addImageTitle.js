// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, state}) {
  	var title = input.title;
	state.push('titles', title);
}

export default importFile
