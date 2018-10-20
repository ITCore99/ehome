import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {xhr as axios} from "./untils/index";
import store from "./store/index";
import VueScroller from 'vue-scroller'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueScroller);
Vue.prototype.axios=axios;
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
