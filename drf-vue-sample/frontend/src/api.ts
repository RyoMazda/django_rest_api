import axios, { AxiosPromise } from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT_URL,
  timeout: 5000,
  headers: {
  'Content-Type': 'application/json',
  },
});

export default {
  login(username: string, password: string): AxiosPromise<any> {
    return api.post(
      `auth/jwt/create/`, {
        username,
        password,
      });
  },

  getBooks(): AxiosPromise<any> {
    return api.get('books/');
  },
};
