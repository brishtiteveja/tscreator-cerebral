// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateLineAge ({input, state}) {
  	var age = Number(input.age);
	var index = input.id;
	state.set('datapacks.' + state.get('whichImage') + '.timelines.' + index + '.age', age);
}

export default updateLineAge
