import { 
  FETCH_USERS_SUCCESS, ADD_NEW_USER, 
  DELETE_USER_BY_ID, 
  UPDATE_UNSAVED_NEW_USER, SHOW_NEW_USER_TIMER, 
  GET_WINNER, FETCH_COMPETITIONS_SUCCESS,
  ADD_NEW_COMPETITION
} from "../actions/users";
import { calculateWinner } from "../../utils/calculateWinner";

export const initialState = {
  users: [],
  usersAmount: '',
  unsavedUser: {},
  toggleNewUserTimer: false,
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
        competitions: state.competitions.map(competition => {
          if (competition.id === +action.payload) {
            const winner = calculateWinner(state.users)
            return Object.assign({}, competition, {
              winner: { name: `${winner.firstName} ${winner.secondName}`, time: winner.time },
              status: 'finished'
            })
          }
          return competition
        })
      }
    case ADD_NEW_COMPETITION:
      return {
        ...state,
        competitions: [...state.competitions, action.payload]
      }
    default:
      return state;
  }
}