// "copy" is an action factory that creates
// an action based on your arguments
import remLines from '../actions/remLines'
import {copy} from 'cerebral/operators'

export default [
  // we copy the title value
  // from the input to the newItemTitle path in
  // our state tree
  remLines,
]
