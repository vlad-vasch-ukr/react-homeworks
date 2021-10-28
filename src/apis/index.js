import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

const API = axios.create({
  baseURL: BASE_URL,
});

export async function fetchUsersApi(id) {
  const { data } = await API.get(`/participants?competitionId_like=${id}`);
  return data;
}

export async function fetchCompetitionsApi() {
  const { data } = await API.get('/competitions');
  return data;
}
