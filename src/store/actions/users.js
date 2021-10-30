export const FETCH_USERS_SUCCESS = '[USERS] fetch users success';
export const ADD_NEW_USER = '[USERS] add new user';
export const DELETE_USER_BY_ID = '[USERS] delete user by id';
export const UPDATE_UNSAVED_NEW_USER = '[USER] update usaved new user';
export const SHOW_NEW_USER_TIMER = '[USER] show new user timer';
export const GET_WINNER = '[USER] get winner';
export const FETCH_COMPETITIONS_SUCCESS = '[USERS] fetch competitions success';
export const ADD_NEW_COMPETITION = '[USERS] add new competition';

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
})

export const fetchCompetitionsSuccess = (competitions) => ({
  type: FETCH_COMPETITIONS_SUCCESS,
  payload: competitions
})

export const addNewUser = (user) => ({
  type: ADD_NEW_USER,
  payload: user
})

export const deleteUserById = (id) => ({
  type: DELETE_USER_BY_ID,
  payload: id
})

export const updateUnsavedNewUser = (user) => ({
  type: UPDATE_UNSAVED_NEW_USER,
  payload: user
})

export const showNewUserTimer = (bool) => ({
  type: SHOW_NEW_USER_TIMER,
  payload: bool
})

export const getWinner = (id) => ({
  type: GET_WINNER,
  payload: id
})

export const addNewCompetition = (competition) => ({
  type: ADD_NEW_COMPETITION,
  payload: competition
})