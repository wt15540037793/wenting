import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.axios=Axios
Vue.config.productionTip = false
Vue.use(ElementUI);
// Axios.defaults.baseURL = 'http://shiyansong.cn:8888/api/private/v1/';
// Axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/';
// Axios.defaults.baseURL = 'http://www.usian.net:7001/api/private/v1/';
Axios.interceptors.request.use(function(config){
  config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
