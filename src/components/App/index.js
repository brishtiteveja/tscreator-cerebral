import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'./function.css'
export default connect(
	{},
	{},
	function App() {
		const tsc = () => {	
		  return(
      			<div className="outer">
				
        			<div className="curve">
      					<button type="button" >Add</button>
      				</div>
      			</div>
		  )
		}
    		return (
		    tsc()	
    		)
  	}
 );
