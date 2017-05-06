// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateTopBound ({input, module}) {
  	var bound = Number(input.bound);
	module.state.set('topBound', bound);
}

export default updateTopBound
