import React from 'react'
import {connect} from 'cerebral-view-react'

export default connect({
  newItemTitle: 'newItemTitle',
  items: 'items',
  inAppShape: 'inStateShape'
}, {
  aaronsCoolEvent: 'newItemTitleSubmitted',
  newItemTitleChanged: 'newItemTitleChanged',
  aaronInAppOnNewShapeRequested: 'aaronControllerOnNewShapeRequested',
},
  function App (props) {
    const onFormSubmit = event => {
      event.preventDefault()
      props.aaronsCoolEvent()
    }

    const onInputChange = event => {
      props.newItemTitleChanged({
        title: event.target.value
      })
    }

    const aaronOnNewShapeRequested = event => {
      props.aaronInAppOnNewShapeRequested();
    }
  
    const drawShape = () => {
      if (props.inAppShape === 'circle') {
        return (<circle cx="25" cy="75" r="20" stroke="red" fill="transparent" strokeWidth="5"/>);
      } else {
        return (<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" strokeWidth="5"/>);
      }
    }

    return (
      <div>
        <p>Type text and hit enter Sahil</p>
        <form onSubmit={onFormSubmit}>
          <input
            type='text'
            value={props.newItemTitle}
            onChange={onInputChange}
          />
        </form>
        <button onClick={aaronOnNewShapeRequested} >Here is the button</button>
 
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
           { drawShape() }
        </svg>
        <ul>
          {
            props.items.map((item, index) => (
            <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>
    )
  }
)
