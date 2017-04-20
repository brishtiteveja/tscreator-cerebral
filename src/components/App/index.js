import React from 'react'
import {connect} from 'cerebral-view-react'
import Preview from './Preview'
import GalleryMain from './GalleryMain'
import EditorMain from './EditorMain'
import Blockmaker from '../Blockmaker'
export default connect({},	{},

	function App(props) {

		return (
			<div>
				<Preview/>
				<GalleryMain/>
				<EditorMain/>
				<Blockmaker/>
			</div>
		)
	}
);
