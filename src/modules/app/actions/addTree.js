// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addTree ({module}) {
  module.state.push('items', 'Tree')
	module.state.push('contents', '')
}

export default addTree
