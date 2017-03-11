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
		var range1 = {"x": width/10, "name": "Left Range Limit", "value": 10};
		var range2 = {"x": 9*width/10, "name": "Right Range Limit", "value": 20};
		var image = {"backgroundImage": background, "timelines": [], "zones": [], "_columns": [{"ranges": [range1, range2]}, "curves": [], "_type": "curve"]};
		state.push('datapacks', image);
	}
}

export default importFile
