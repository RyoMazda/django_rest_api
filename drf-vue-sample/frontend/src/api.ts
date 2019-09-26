import axios, { AxiosPromise } from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT_URL,
  timeout: 5000,
  headers: {
  'Content-Type': 'application/json',
  },
});

interface LoginData {
  access: string;
  refresh: string;
}

export default {
  login(username: string, password: string): AxiosPromise<LoginData> {
    return api.post(
      `auth/jwt/create/`, {
        username,
        password,
      });
  },

  getBooks(): AxiosPromise<BookType[]> {
    return api.get('books/');
  },
};
