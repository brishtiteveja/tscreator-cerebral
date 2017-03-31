// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateLinePosition ({input, state}) {
  	var position = input.y;
	var index = input.id;
	state.set('datapacks.' + state.get('whichImage') + '.timelines.' + index + '.y', position);
}

export default updateLinePosition
