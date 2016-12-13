// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addBlock ({state}) {
  state.push('items', 'block')
	state.push('contents', '');
}

export default addBlock
