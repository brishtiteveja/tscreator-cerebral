// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function exportFile ({state}) {
  	var text = "data:text/plain;charset=utf-8,";
	for(var i = 0; i < state.get('contents').length; i++) {
		text = text + state.get('contents')[i];
	}
}

export default exportFile
