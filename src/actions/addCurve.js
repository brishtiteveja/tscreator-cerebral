// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addCurve ({state}) {
  state.push('items', 'curve')
	state.push('contents', '')
}

export default addCurve
