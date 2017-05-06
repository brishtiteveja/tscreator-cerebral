// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateBaseBound ({input, module}) {
  	var bound = Number(input.bound);
	module.state.set('baseBound', bound);
}

export default updateBaseBound
