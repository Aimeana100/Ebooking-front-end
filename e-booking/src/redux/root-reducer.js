import { combineReducers } from 'redux'
import authReducer from './UI/ui-reducer'

export default combineReducers({
  sidebarShow: authReducer,
})
