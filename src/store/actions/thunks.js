import { fetchUsersSuccess } from "./users";
import { fetchUsersApi } from '../../apis';

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const posts = await fetchUsersApi();
      dispatch(fetchUsersSuccess(posts));
    } catch (e) {
      console.error(e);
    }
  };
};