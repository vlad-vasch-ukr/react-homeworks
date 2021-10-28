import { fetchUsersSuccess, fetchCompetitionsSuccess } from "./users";
import { fetchUsersApi, fetchCompetitionsApi } from '../../apis';

export const fetchUsers = (id) => {
  return async (dispatch) => {
    try {
      const posts = await fetchUsersApi(id);
      dispatch(fetchUsersSuccess(posts));
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchCompetitions = () => {
  return async (dispatch) => {
    try {
      const competitions = await fetchCompetitionsApi();
      dispatch(fetchCompetitionsSuccess(competitions));
    } catch (e) {
      console.error(e);
    }
  };
};