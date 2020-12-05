import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

const mock = true;
if(mock){
  require('./mock/api');//import预编译加载，若用import导入mock，将会永远被拦截，
}
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
})

Vue.use(vueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
