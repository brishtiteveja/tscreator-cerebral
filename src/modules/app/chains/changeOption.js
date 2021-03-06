// "copy" is an action factory that creates
// an action based on your arguments
import changeRefOption from '../actions/changeRefOption'
import refLines from '../actions/refLines'
import {copy} from 'cerebral/operators'

export default [
  // we copy the title value
  // from the input to the newItemTitle path in
  // our state tree
  changeRefOption,
  refLines,
]
