// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function showEditor ({input, state}) {
  	var ID = input.ID;
	var editImage = state.get('editImage');
	if(ID >= 0) {
		state.set('whichImage', ID);
		state.set('currentExport', state.get('imags')[state.get('whichImage')]);
	}
	state.set('editImage', true);
	state.set('preview', false);
	state.set('initialDisplay', false);
}

export default showEditor
