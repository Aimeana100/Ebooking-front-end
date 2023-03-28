import uiActiontypes from './ui-types'
const initialState = {
  sidebarShow: true,
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActiontypes.TOGGLE_SIDEBAR:
      return { ...state, sidebarShow: !state.sidebarShow }
    case uiActiontypes.ACTIVATE_TOAST:
      return { ...state, success: action }
    default:
      return state
  }
}
export default uiReducer
