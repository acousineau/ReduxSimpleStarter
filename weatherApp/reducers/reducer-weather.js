import { FETCH_WEATHER } from '../actions/index'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      // Immutable state
      return [ action.payload.data, ...state ]
  }
  return state
}