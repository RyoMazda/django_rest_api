import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import auth from './auth';
import message from './message';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    auth,
    message,
  },
};

export default new Vuex.Store<RootState>(store);
