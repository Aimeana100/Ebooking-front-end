import uiActiontypes from './ui-types'
const initialState = {
  sidebarShow: true,
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActiontypes.TOGGLE_SIDEBAR:
      return { ...state, sidebarShow: !state.sidebarShow }
    default:
      return state
  }
}
export default uiReducer
