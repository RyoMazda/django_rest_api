import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios';
import store from '@/store';


const api = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT_URL,
  timeout: 5000,
  headers: {
  'Content-Type': 'application/json',
  },
});


api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<any> => {
    const status = error.response ? error.response.status : 500;

    if (status === 400) {  // Validation Error
      const message = error.response ? error.response.data : 'Status 400';
      await store.dispatch('message/addWarningMessage', message);
    } else if (status === 401) {  // Authentication Error
      await store.dispatch('auth/logout');
      await store.dispatch('message/setErrorMessage', 'Authentication Error!');
    } else if (status === 403) {  // Authorization Error
      await store.dispatch('message/setErrorMessage', 'Authorization Error');
    } else {
      await store.dispatch('message/setErrorMessage', 'There\'s something wrong with you!');
    }

    return Promise.reject(error);
  },
);


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

  reload(): AxiosPromise<any> {
    console.log('api.reload');
    return api.get('auth/users/me/');
  },

  getBooks(): AxiosPromise<BookType[]> {
    return api.get('books/');
  },
};
