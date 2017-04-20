// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function changeOffsets ({input, module}) {
  	var top = input.top;
	var height = input.height;
	module.state.set('svgTop', top);
	module.state.set('svgHeight', height);
}

export default changeOffsets
