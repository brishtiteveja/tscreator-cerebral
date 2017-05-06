// "copy" is an action factory that creates
// an action based on your arguments
import updateBaseBound from '../actions/updateBaseBound'
import updateZones from '../actions/updateZones'
import {copy} from 'cerebral/operators'

export default [
  // we copy the title value
  // from the input to the newItemTitle path in
  // our state tree
  updateBaseBound,
  updateZones,
]
