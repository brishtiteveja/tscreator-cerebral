// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addTree ({state}) {
  state.push('items', 'Tree')
	state.push('contents', '')
}

export default addTree
