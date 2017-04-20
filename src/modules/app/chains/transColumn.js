// You can import any action and make
// it part of the signal execution
import addTrans from '../actions/addTrans'
import {set} from 'cerebral/operators'

export default [
  // You just reference the action and the
  // signal will handle its execution
  addTrans,

  // We use an action factory from cerebral-addons
  // to empty the value of our input
  set('state:app.newItemTitle', '')
]
