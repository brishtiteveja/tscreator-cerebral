// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function exportFile ({module}) {
  	var text = "data:text/plain;charset=utf-8,";
	for(var i = 0; i < module.state.get('contents').length; i++) {
		text = text + module.state.get('contents')[i];
	}
}

export default exportFile
