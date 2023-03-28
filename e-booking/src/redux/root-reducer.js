//jshint esversion:9

import { combineReducers } from 'redux'
import UIReducer from './UI/ui-reducer'
import authReducer from './Auth/authReducer'
import roomReducer from './Room/roomReducer'
import rolesReducer from './Roles/RolesReducer'
import userReducer from './User/userReducer'
import itemReducer from './StockItem/ItemReducer'
import productReducer from './Product/productReducer'
import categoryReducer from './Categories/categroiesReducer'
import notificationReducer from './Notifications/notificationReducer'
import selectionReducer from './Select/selectionReducer'

export default combineReducers({
  sidebarShow: UIReducer,
  auth: authReducer,
  rooms: roomReducer,
  roles: rolesReducer,
  systemUsers: userReducer,
  products: productReducer,
  stockItems: itemReducer,
  categories: categoryReducer,
  notification: notificationReducer,
  selection: selectionReducer,
})
