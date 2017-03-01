import Model from 'cerebral/models/immutable'

const model = Model({
  	items: [],
  	displayMenu: false,
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
})

export default model
