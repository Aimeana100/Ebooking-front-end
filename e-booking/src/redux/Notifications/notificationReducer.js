import notificationTypes from './notificicationTypes'

const notificationReducer = (
  state = { activate: false, text: '' },
  { type, payload },
) => {
  switch (type) {
    case notificationTypes.FAIL:
      return { ...state, activate: true, text: payload }
    case notificationTypes.SUCCESS:
      return { ...state, activate: true, text: payload }
    default:
      return state
  }
}
export default notificationReducer
