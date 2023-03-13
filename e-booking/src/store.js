//jshint esversion:9

import rootReducer from './redux/root-reducer'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

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

function saveToLocalStorage(state) {
  try {
    localStorage.setItem('state', JSON.stringify(state))
  } catch (e) {
    console.error(e)
  }
}

function loadFromLocalStorage() {
  try {
    const stateStr = localStorage.getItem('state')
    return stateStr ? JSON.parse(stateStr) : undefined
  } catch (e) {
    console.error(e)
    return undefined
  }
}

let persistedState = loadFromLocalStorage()

const middleware = [thunk, logger]

export const store = configureStore({
  reducer: rootReducer,
  persistedState,
  middleware: [...middleware],
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
