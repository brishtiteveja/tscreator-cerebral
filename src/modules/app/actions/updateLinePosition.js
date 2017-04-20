// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateLinePosition ({input, module}) {
  	var position = input.y;
	var index = input.id;
	module.state.set('datapacks.' + module.state.get('whichImage') + '.timelines.' + index + '.y', position);
}

export default updateLinePosition
