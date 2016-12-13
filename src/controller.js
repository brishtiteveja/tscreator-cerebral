import {Controller} from 'cerebral'
import model from './model'
import Devtools from 'cerebral-module-devtools'

import updateItemTitle from './chains/updateItemTitle'
import addNewColumn from './chains/addNewColumn'
import columnTypeClicked from './chains/columnTypeClicked'
import curveColumn from './chains/curveColumn'
import blockColumn from './chains/blockColumn'
import treeColumn from './chains/treeColumn'
import transColumn from './chains/transColumn'
import downloadFile from './chains/downloadFile'
import dropFile from './chains/dropFile'

const controller = Controller(model)

controller.addSignals({
	newItemTitleChanged: {
		chain: updateItemTitle,
		immediate: true
	},

	
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

	sriramColumnButtonClicked: columnTypeClicked,

	sriramCurveColumn: curveColumn,

	sriramBlockColumn: blockColumn,

	sriramTransColumn: transColumn,

	sriramTreeColumn: treeColumn,

	sriramExportClicked: downloadFile,

	sriramFileDropped: dropFile,
})

controller.addModules({
	devtools: Devtools()
})

export default controller
