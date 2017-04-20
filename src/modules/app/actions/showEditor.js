// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function showEditor ({input, module}) {
  	var ID = input.ID;
	var editImage = module.state.get('editImage');
	if(ID >= 0) {
		module.state.set('whichImage', ID);
		module.state.set('currentExport', module.state.get('imags')[module.state.get('whichImage')]);
	}
	module.state.set('editImage', true);
	module.state.set('preview', false);
	module.state.set('initialDisplay', false);
}

export default showEditor
