// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function remLines ({input, state}) {
	var references = input.references;
	var setting = state.get('typeRef');
	var lBound = input.lBound;
	var uBound = input.uBound;
	var index = state.get('whichImage');
	var timelines = state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = numLines - 1;
	for(; i >= 0; i--) {
		state.pop('datapacks.' + index + '.timelines');
	}
	while(1)
		if(references.{setting}.timelines[i].age >= lBound && references.{setting}.timelines[i].age <= uBound)
			state.push('datapacks.' + index + '.timelines', references.{setting}.timelines[i]);
		}
		if(references.{setting}.timelines[i].age > uBound) {
			break;
		}
		i++;
	}
}

export default remLines
