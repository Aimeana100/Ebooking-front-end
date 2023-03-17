import notificationTypes from './notificicationTypes'

export const success = (paylod) => ({
  type: notificationTypes.SUCCESS,
  payload,
})
export const fail = (payload) => ({
  type: notificationTypes.FAIL,
  payload,
})
