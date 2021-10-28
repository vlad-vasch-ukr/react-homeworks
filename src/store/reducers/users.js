import { 
  FETCH_USERS_SUCCESS, ADD_NEW_USER, 
  DELETE_USER_BY_ID, 
  UPDATE_UNSAVED_NEW_USER, SHOW_NEW_USER_TIMER, 
  GET_WINNER, FETCH_COMPETITIONS_SUCCESS
} from "../actions/users";
import { calculateWinner } from "../../utils/calculateWinner";

export const initialState = {
  users: [],
  usersAmount: '',
  unsavedUser: {},
  toggleNewUserTimer: false,
  winner: null,
  competitions: []
}

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        usersAmount: action.payload.length
      }
    case FETCH_COMPETITIONS_SUCCESS:
      return {
        ...state,
        competitions: action.payload
      }
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        usersAmount: state.users.length + 1
      }
    case DELETE_USER_BY_ID:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
        usersAmount: state.users.length - 1
      }
    case UPDATE_UNSAVED_NEW_USER:
      return {
        ...state,
        unsavedUser: action.payload
      }
    case SHOW_NEW_USER_TIMER:
      return {
        ...state,
        toggleNewUserTimer: action.payload
      }
    case GET_WINNER:
      return {
        ...state,
        winner: calculateWinner(state.users)
      }
    default:
      return state;
  }
}