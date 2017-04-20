// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function updateLineAge ({input, module}) {
  	var age = Number(input.age);
	var index = input.id;
	module.state.set('datapacks.' + module.state.get('whichImage') + '.timelines.' + index + '.age', age);
}

export default updateLineAge
