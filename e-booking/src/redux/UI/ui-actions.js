import uiActiontypes from './ui-types'

export const toggleSideBar = (state) => ({
  type: uiActiontypes.TOGGLE_SIDEBAR,
  payload: state,
})
export const showSuccess = (payload) => ({
  type: uiActiontypes.ACTIVATE_TOAST,
  payload,
})
