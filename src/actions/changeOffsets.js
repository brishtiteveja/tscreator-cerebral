// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function changeOffsets ({input, state}) {
  	var top = input.top;
	var height = input.height;
	state.set('svgTop', top);
	state.set('svgHeight', height);
}

export default changeOffsets
