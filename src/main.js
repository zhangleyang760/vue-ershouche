
import Vue from 'vue'
import App from './App'
import router from './router/index'
import  Axios from 'axios'
import Vuex from "vuex"
import store from "./vuex/store"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// router.beforeEach((to, from, next) => {
//   console.log(store.state.user.user)
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (store.state.user) {  // 通过vuex state获取当前的token是否存在
//       next();
//     }else {
//       next({
//         path: '/userlogin',
//         query: {redirect:to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }else {
//     next();
//   }
// })

Vue.config.productionTip = false
Vue.prototype.$axios=Axios
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})
