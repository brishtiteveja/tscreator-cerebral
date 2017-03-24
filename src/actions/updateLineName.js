// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateLineName ({input, state}) {
  	var name = input.name;
	var index = input.id;
	state.set('datapacks.' + state.get('whichImage') + '.timelines.' + index + '.name', name);
}

export default updateLineName
