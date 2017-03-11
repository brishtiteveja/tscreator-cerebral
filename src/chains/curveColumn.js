// You can import any action and make
// it part of the signal execution
import addCurve from '../actions/addCurve'
import {set} from 'cerebral/operators'

export default [
  // You just reference the action and the
  // signal will handle its execution
  addCurve,

  // We use an action factory from cerebral-addons
  // to empty the value of our input
  set('state:newItemTitle', '')
]
