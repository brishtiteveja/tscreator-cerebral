// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addTrans ({module}) {
  module.state.push('items', 'Transect')
  module.state.push('contents', '')
}

export default addTrans
