import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';


const EMPTY_MESSAGE = {
  error: '',
  warnings: [],
  info: '',
};


const namespaced: boolean = true;


const state: MessageState = EMPTY_MESSAGE;


const getters: GetterTree<MessageState, RootState> = {
  error: (s: MessageState): string => s.error,
  warnings: (s: MessageState): string[] => s.warnings,
  info: (s: MessageState): string => s.info,
};


const mutations: MutationTree<MessageState> = {
  setErrorMessage(s: MessageState, error: string): void {
    s.error = error;
  },
  setInfoMessage(s: MessageState, info: string): void {
    s.info = info;
  },
  addWarningMessage(s: MessageState, warning: string): void {
    s.warnings.push(warning);
  },
  clear(s: MessageState): void {
    console.log('clear mutation');
    s.error = '';
    s.warnings = [];
    s.info = '';
  },
};


const actions: ActionTree<MessageState, RootState> = {
  setErrorMessage({ commit }: any, error: string): void {
    commit('setErrorMessage', error);
  },
  setInfoMessage({ commit }: any, info: string): void {
    commit('setInfoMessage', info);
  },
  addWarningMessage({ commit }: any, warning: string): void {
    commit('addWarningMessage', warning);
  },
  clearMessages({ commit }: any): void {
    console.log('clear action');
    commit('clear');
  }
};


const auth: Module<MessageState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default auth;
