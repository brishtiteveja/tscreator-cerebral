import Model from 'cerebral/models/immutable'

const model = Model({
  	items: [],
  	displayMenu: false,
	contents: [],
	textFile: '',
	initialDisplay: true,
	preview: false,
	titles: ["Just", "Testing", "Image", "", "Generator", "Thing"],
	editList: ["Just", "", "Testing", "", "Image", "", "Generator", "", "Thing"],
	whichImage: -1,
	editImage: false,
})

export default model
