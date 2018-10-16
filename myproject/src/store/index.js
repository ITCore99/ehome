import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
      title:"",
      index:"1"
  },
  mutations:{
    CHANGETITLE(state,payload)
    {
       state.title=payload;
    },
    CHANGEFOOSTER(state,payload)
    {
      state.index=payload;
    }
  },
  plugins:[createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
        sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key),
    },
  })]
});
export default  store;
