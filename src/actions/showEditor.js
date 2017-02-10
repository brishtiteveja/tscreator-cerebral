// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function showEditor ({input, state}) {
  	var ID = input.ID;
	var editImage = state.get('editImage');
	if(!editImage) {
		var n = 1;
		var p = 4;
		while(p <= ID) {
			n++;
			p *= n;
		}
		ID = 2*(ID - (n - 1));
	}
	state.set('whichImage', ID);
	state.set('editImage', true);
	state.set('preview', false);
	state.set('initialDisplay', false);
}

export default showEditor
