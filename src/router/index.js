import Vue from 'vue'
import Router from 'vue-router'

import userinfo from '@/components/userinfo'
import houtai1 from '@/components/houtai1'
import updatehoutai1 from '@/components/updatehoutai1'
import userReg from '@/components/userReg'
import userlogin from '@/components/userlogin'
import houtai2 from '@/components/houtai2'
import updatehoutai2 from '@/components/updatehoutai2'
import index from '@/components/index'
import houtai3 from '@/components/houtai3'
import updatehoutai3 from '@/components/updatehoutai3'

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

      path:'/userlogin',
      name:'userlogin',
      component:userlogin
    },{
      path:'/houtai2',
      name:'houtai2',
      component:houtai2
    },{
      path:'/updatehoutai2/:sid',
      name:'updatehoutai2',
      component:updatehoutai2
    },
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path:'/houtai3',
      name:'houtai3',
      component:houtai3
    },{
      path:'/updatehoutai3/:cid',
      name:'updatehoutai3',
      component:updatehoutai3
    },

  ]
})
