//jshint esversion:9

import { combineReducers } from 'redux'
import UIReducer from './UI/ui-reducer'
import authReducer from './Auth/authReducer'
import roomReducer from './Room/roomReducer'
import rolesReducer from './Roles/RolesReducer'
import userReducer from './User/userReducer'
import itemReducer from './StockItem/ItemReducer'

export default combineReducers({
  sidebarShow: UIReducer,
  auth: authReducer,
  rooms: roomReducer,
  roles: rolesReducer,
  systemUsers: userReducer,
  stockItems: itemReducer,
})
