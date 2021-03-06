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
import updateTitle from './chains/updateTitle'
import updateLines from './chains/updateLines'
import exportImage from './chains/exportImage'
import hideList from './chains/hideList'
import hideTime from './chains/hideTime'
import changeLineName from './chains/changeLineName'
import changeLineAge from './chains/changeLineAge'
import deleteLines from './chains/deleteLines'
import dragLine from './chains/dragLine'
import updateOffsets from './chains/updateOffsets'
import hideRef from './chains/hideRef'
import showApp from './chains/showApp'
import changeOption from './chains/changeOption'
import addRefLines from './chains/addRefLines'
import changeTopBound from './chains/changeTopBound'
import changeBaseBound from './chains/changeBaseBound'

export default module => {

	module.addState({
		items: [],
		displayMenu: false,
		displayApp: true,
		contents: [],
		textFile: '',
		initialDisplay: true,
		preview: false,
		titles: [],
		imags: [],
		whichImage: -1,
		editImage: false,
		imageDropEnable: true, 
		lines:[],
		currentExport: null,
		datapacks: [],
		hideEditList: true,
		hideTimeList: false,
		svgTop: 0,
		svgHeight: 0,
		hideRef: false,
		refOption: "None",
		topBound: 0,
		baseBound: 15,
	});
	
	module.addSignals({
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
		sriramImageTitleAdded: updateTitle,
		sriramLineClicked: updateLines,
		sriramExportImage: exportImage,
		sriramHideList: hideList,
		sriramHideTime: hideTime,
		sriramChangeLineName: changeLineName,
		sriramChangeLineAge: changeLineAge,
		sriramDeleteLines: deleteLines,
		sriramDragLine: dragLine,
		sriramUpdateOffsets: updateOffsets,
		sriramHideRef: hideRef,
		sriramShowApp: showApp,
		sriramChangeOption: changeOption,
		sriramAddRefLines: addRefLines,
		sriramChangeTop: changeTopBound,
		sriramChangeBase: changeBaseBound,
	});
};
