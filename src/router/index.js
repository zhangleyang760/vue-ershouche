import Vue from 'vue'
import Router from 'vue-router'

import userinfo from '@/components/userinfo'
import houtai1 from '@/components/houtai1'
import updatehoutai1 from '@/components/updatehoutai1'
import userReg from '@/components/userReg'
import houtai2 from '@/components/houtai2'
import updatehoutai2 from '@/components/updatehoutai2'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
   {
    path:"/userinfo",
    name:'userinfo',
    component:userinfo
    },{
    path:'/houtai1',
      name:'houtai1',
      component:houtai1
    },{
    path:'/updatehoutai1/:sid',
      name:'updatehoutai1',
      component:updatehoutai1
    },
    {
      path:'/userReg',
      name:'userReg',
      component:userReg
    },{
      path:'/houtai2',
      name:'houtai2',
      component:houtai2
    },{
      path:'/updatehoutai2/:bid',
      name:'updatehoutai2',
      component:updatehoutai2
    },
    {
      path:'/',
      name:'index',
      component:index
    },

  ]
})
