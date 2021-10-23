import { FETCH_USERS_SUCCESS, ADD_NEW_USER, DELETE_USER_BY_ID, UPDATE_USER_SEARCH_VALUE } from "../actions/users";

export const initialState = {
  users: [],
  serchUserValue: '',
  currentUser: {}
}

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case DELETE_USER_BY_ID:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    case UPDATE_USER_SEARCH_VALUE:
      return {
        ...state,
        serchUserValue: action.payload
      }
    default:
      return state;
  }
}