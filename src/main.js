import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import vueLazyLoad from 'vue-lazyload'
import vueCookie from 'vue-cookie'
import router from './router'
import { Message } from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import App from './App.vue'

// const mock = true;
// if(mock){
//   require('./mock/api');//import预编译加载，若用import导入mock，将会永远被拦截，
// }
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//错误拦截
axios.interceptors.response.use(function (response){
  let res = response.data;
  let path = location.hash;
  if(res.status === 0){
    return res.data;
  }else if(res.status === 10){
    if(path !== '#/index'){
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  }else{
    // this.$message.warning(res.msg);
    return Promise.reject(res);//reject errors
  }
},(error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
})

Vue.prototype.$message = Message;
Vue.use(vueAxios, axios);
Vue.use(vueLazyLoad,{
  loading:'/imgs/loading-svg/loading-balls.svg'
});
Vue.use(vueCookie);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
