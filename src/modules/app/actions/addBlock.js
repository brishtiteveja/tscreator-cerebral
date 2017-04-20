// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addBlock ({module}) {
  module.state.push('items', 'Block')
	module.state.push('contents', '');
}

export default addBlock
