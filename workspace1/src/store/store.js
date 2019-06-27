import Vue from 'vue'
import Vuex from 'vuex'
import module1 from './module1';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    test1(ctx, { param1 }) {
      console.log('Test1: ', param1);
    },
  },
  modules: { module1 },
})
