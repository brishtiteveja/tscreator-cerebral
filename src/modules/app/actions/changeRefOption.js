// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateLineAge ({input, module}) {
  	var opt = input.opt;
	module.state.set('refOption', opt);
}

export default updateLineAge
