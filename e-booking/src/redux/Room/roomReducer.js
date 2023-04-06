//jshint esversion:9
import { ROOM_ACTION_TYPES } from './roomActionTypes'

const roomReducer = (
  state = { rooms: {}, selectedRoom: {} },
  { type, payload },
) => {
  switch (type) {
    case ROOM_ACTION_TYPES.SELECT_ROOM:
      return { ...state, selectedRoom: { ...payload } }
    case ROOM_ACTION_TYPES.GET_ROOMS:
      return { ...state, rooms: [...payload] }
    case ROOM_ACTION_TYPES.ADD_ROOM:
      return { ...state, rooms: [...state.rooms, payload] }
    case ROOM_ACTION_TYPES.BOOK_ROOM:
      let rooms = state.rooms.filter((room) =>
        room.id === payload.id ? { ...room, isBooked: true } : room,
      )
      return { ...state, rooms: rooms }
    case ROOM_ACTION_TYPES.RELEASE_ROOM:
      let Rrooms = state.rooms.filter((room) =>
        room.id === payload.id ? { ...room, isBooked: false } : room,
      )
      return { ...state, rooms: Rrooms }
    default:
      return { ...state }
  }
}
export default roomReducer
