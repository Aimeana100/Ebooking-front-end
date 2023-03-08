import uiActiontypes from './ui-types'

const toggleSideBar = (state) => ({
  type: uiActiontypes.TOGGLE_SIDEBAR,
  payload: state,
})

export default toggleSideBar
