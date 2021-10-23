export const FETCH_USERS_SUCCESS = '[USERS] fetch users success';
export const ADD_NEW_USER = '[USERS] add new user';
export const DELETE_USER_BY_ID = '[USERS] delete user by id';
export const UPDATE_USER_SEARCH_VALUE = '[USER] update user search value';

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users
})

export const addNewUser = (user) => ({
  type: ADD_NEW_USER,
  payload: user
})

export const deleteUserById = (id) => ({
  type: DELETE_USER_BY_ID,
  payload: id
})

export const updateUserSearchValue = (value) => ({
  type: UPDATE_USER_SEARCH_VALUE,
  payload: value
})