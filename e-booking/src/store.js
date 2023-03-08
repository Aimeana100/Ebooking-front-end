import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './redux/root-reducer'

// const initialState = {
//   sidebarShow: true,
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

const middleware = [logger]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
