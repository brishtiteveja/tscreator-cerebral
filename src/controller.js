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
import showImage from './chains/showImage'
import previewClicked from './chains/pClicked'
import backClicked from './chains/backClicked'

const controller = Controller(model)

controller.addSignals({

	sriramNewColumnRequested: addNewColumn,

	sriramColumnButtonClicked: columnTypeClicked,

	sriramCurveColumn: curveColumn,

	sriramBlockColumn: blockColumn,

	sriramTransColumn: transColumn,

	sriramTreeColumn: treeColumn,

	sriramExportClicked: downloadFile,

	sriramFileDropped: dropFile,
	
	sriramImageClicked: showImage,
	
	sriramPreviewClicked: previewClicked,
	
	sriramBackClicked: backClicked,
})

controller.addModules({
	devtools: Devtools()
})

export default controller
