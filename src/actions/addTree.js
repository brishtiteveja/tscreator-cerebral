// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addTree ({state}) {
  state.push('items', 'tree')
}

export default addTree
