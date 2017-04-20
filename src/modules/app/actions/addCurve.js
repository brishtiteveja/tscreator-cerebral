// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addCurve ({module}) {
  module.state.push('items', 'Curve')
	module.state.push('contents', '')
}

export default addCurve
