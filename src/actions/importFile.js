// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, state}) {
  	var ID = input.ID;
	var text = input.con;
	var imageDrop = state.get('imageDropEnable');
	if(!imageDrop) {
		var temp = state.get('contents');
		for(var i = 0; i < temp.length - ID - 1; i++) {
			state.pop('contents');	
		}
		state.pop('contents');
		state.push('contents', text);
		for(var j = ID + 1; j < temp.length; j++) {
			state.push('contents', temp[j]);
		}
	} else {
		state.push('imags', text);
		var temp = new Image();
		temp.src = text;
		var height = temp.height;
		var width = temp.width;
		var background = {"isVisible": true, "isPreserveAspectRatio": true, "dataURL": text, "origWidth": width, "origHeight": height, "curWidth": width, "curHeight": height};
		var image = {"backgroundImage": background, "timelines": [], "zones": []};
		state.push('datapacks', image);
	}
}

export default importFile
