// This action grabs the current "newItemTitle"
// from the state store and putting it at the top of
// the "items" array
function addTrans ({state}) {
  state.push('items', 'Transect')
  state.push('contents', '')
}

export default addTrans
