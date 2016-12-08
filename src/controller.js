import {Controller} from 'cerebral'
import model from './model'
import Devtools from 'cerebral-module-devtools'

import updateItemTitle from './chains/updateItemTitle'
import addNewItem from './chains/addNewItem'
import addNewColumn from './chains/addNewColumn'
import columnTypeClicked from './chains/columnTypeClicked'

const controller = Controller(model)

controller.addSignals({
	newItemTitleChanged: {
		chain: updateItemTitle,
		immediate: true
	},

	newItemTitleSubmitted: addNewItem,
	
	aaronControllerOnNewShapeRequested: [
		function({input, state, output, services}) {
			var cur_shape = state.get('inStateShape');
			if (cur_shape === 'circle') {
				state.set('inStateShape', 'square');
			} else {
				state.set('inStateShape', 'circle');
			}
		}
	],

	sriramNewColumnRequested: addNewColumn,

	sriramColumnButtonClicked: columnTypeClicked
})

controller.addModules({
	devtools: Devtools()
})

export default controller
