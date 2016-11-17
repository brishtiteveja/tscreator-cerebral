import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'./function.css'
export default connect(
		{},
		{},
		function App() {
			function addColumn() {
				return (
					<div className="column">
					</div>
				)
			}
			const tsc = () => {	
				return(
					<div className="outer">	
						<div className="inner">
							<div className="column">
								<input type="button" value="Add Column" onClick=addColumn()>
								</input>
							</div>
							<div className="column">
							</div>
							<div className="column">
							</div>
						</div>	
					</div>
		      		)
			}

			return (
					tsc()	
		       	)
		}
);
