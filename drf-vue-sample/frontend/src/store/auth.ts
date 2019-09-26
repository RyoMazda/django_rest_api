import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

// import router from '../router';
import api from '@/api';


const TOKEN_KEY = 'api_token';

const namespaced: boolean = true;


const state: AuthState = {
  token: window.localStorage.getItem(TOKEN_KEY),
};


const getters: GetterTree<AuthState, RootState> = {
  isLoggedIn(s: AuthState): boolean {
    return !!s.token;
  },
};


const actions: ActionTree<AuthState, RootState> = {
  async login({ commit }: any, form: LoginForm): Promise<void> {
    const response = await api.login(form.username, form.password);
    console.log(response);

    const token = response.data.access;
    commit('setToken', token);
    window.localStorage.setItem(TOKEN_KEY, token);
    // await router.push('/');
  },
  logout({ commit }): any {
    commit('setToken', null);
    window.localStorage.removeItem(TOKEN_KEY);
    // router.push('/index.html');
  },
};


const mutations: MutationTree<AuthState> = {
  setToken(s: AuthState, newToken: string | null): void {
    s.token = newToken;
  },
};


const auth: Module<AuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default auth;
