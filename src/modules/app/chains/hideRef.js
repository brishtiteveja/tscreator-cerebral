// You can import any action and make
// it part of the signal execution
import {toggle} from 'cerebral/operators'

export default [
  // You just reference the action and the
  // signal will handle its execution

  // We use an action factory from cerebral-addons
  // to empty the value of our input
  toggle('state:app.setRef'),
]
