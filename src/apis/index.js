import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

const API = axios.create({
  baseURL: BASE_URL,
});

export async function fetchUsersApi() {
  const { data } = await API.get('/users');
  return data;
}
