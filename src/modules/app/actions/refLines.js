// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
import references from './references'

function remLines ({input, module}) {
	var whichRef = module.state.get('refOption');
	var targ = references;
	var height = 300;

	var lBound = 0;
	var uBound = 15;
	var index = module.state.get('whichImage');
	var timelines = module.state.get('datapacks.' + index + '.timelines');
	var numLines = timelines.length;
	var i = numLines - 1;
	
	for(; i >= 0; i--) {
		module.state.pop('datapacks.' + index + '.timelines');
	}
	i = 0;
	if(whichRef != "None") {
		if(whichRef == "Period") {
		targ = references.Period;
		}
		if(whichRef == "Epoch") {
			targ = references.Epoch;
		}
		if(whichRef == "Stage") {
			targ = references.Stage;
		}
		var temp = 1;
		var num = 0;
		while(temp) {
			if(targ.timelines[i].age >= lBound && targ.timelines[i].age <= uBound) {
				num++;
			}
			if(targ.timelines[i].age > uBound) {
				temp = 0;
			}
			i++;
		}
		i = 0;
		temp = 1;
		var counter = 0;
		while(temp) {
			if(targ.timelines[i].age >= lBound && targ.timelines[i].age <= uBound) {
				var position = (height/num)*counter;
				if(position == 0) {
					position = 3;
				}
				var line = {"name": targ.timelines[i].name, "age": targ.timelines[i].age, "y": position};
				counter++;
				module.state.push('datapacks.' + index + '.timelines', line)
			}
			if(targ.timelines[i].age > uBound) {
				temp = 0;
			}
			i++;
		}
	}
}

export default remLines
