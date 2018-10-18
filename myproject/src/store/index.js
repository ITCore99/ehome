import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

const store=new Vuex.Store({
  state:{
      title:"",
      index:"1",
      token:'',
      userInfo:{},
      cloudItemData:""
  },
  mutations:{
    CHANGETITLE(state,payload)
    {
       state.title=payload;
    },
    CHANGEFOOSTER(state,payload)
    {
      state.index=payload;
    },
    INITUSERINFO(state,payload)
    {
      state.userInfo=payload;
    },
    INITTOKEN(state,payload)
    {
      state.token=payload;
    },
    PASSCLOUDDATA(state,payload)
    {
      state.cloudItemData=new Array(payload);
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
