import Vue from 'vue'
import Router from 'vue-router'

import userinfo from '@/components/userinfo'
import houtai1 from '@/components/houtai1'
import updatehoutai1 from '@/components/updatehoutai1'

Vue.use(Router)

export default new Router({
  routes: [
   {
    path:"/",
    name:'userinfo',
    component:userinfo
    },{
    path:'/houtai1',
      name:'houtai1',
      component:houtai1
    },{
    path:'/updatehoutai1/:id',
      name:'updatehoutai1',
      component:updatehoutai1
    }

  ]
})
