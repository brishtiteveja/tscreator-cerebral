import React from 'react'
import {connect} from 'cerebral-view-react'
import Preview from '../Preview'
import GalleryMain from '../GalleryMain'
import EditorMain from '../EditorMain'
export default connect({},	{},

	function App(props) {

		return (
			<div>
				<Preview/>
				<GalleryMain/>
				<EditorMain/>
			</div>
		)
	}
);
