// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function importFile ({input, module}) {
  	var ID = input.ID;
	var text = input.con;
	var imageDrop = module.state.get('imageDropEnable');
	if(!imageDrop) {
		var temp = module.state.get('contents');
		for(var i = 0; i < temp.length - ID - 1; i++) {
			module.state.pop('contents');	
		}
		module.state.pop('contents');
		module.state.push('contents', text);
		for(var j = ID + 1; j < temp.length; j++) {
			module.state.push('contents', temp[j]);
		}
	} else {
		module.state.push('imags', text);
		var temp = new Image();
		temp.src = text;
		var height = temp.height;
		var width = temp.width;
		var background = {"isVisible": true, "isPreserveAspectRatio": true, "dataURL": text, "origWidth": width, "origHeight": height, "curWidth": width, "curHeight": height};
		var image = {"backgroundImage": background, "timelines": [], "zones": []};
		module.state.push('datapacks', image);
	}
}

export default importFile
