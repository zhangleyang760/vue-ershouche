<template>
  <div id="app">
    <div id="head">
      <div id="headin">
        <div class="headtap"><router-link to="/">首页</router-link></div>
        <div  v-if="showname" class="headtap"><router-link to="/userlogin">登录</router-link>|<router-link to="/userReg">注册</router-link></div>
        <div  v-if="!showname" class="headtap"><a>{{names}}</a> |<a @click="loginout()" >注销</a></div>
        <div class="headtap"><a @click="userinfo">个人中心</a></div>
        <div class="headtap"><a >联系客服</a> </div>
        <div class="headtap"><a >网站导航</a> </div>
        <div class="headtap"><router-link to="/adminlogin">后台管理</router-link> </div>
        <div class="headtap"><a @click="realinfo">实名认证</a></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from "axios"
export default {
  data() {
    return {
      showname:true,
      names:'',
    };
  },
  mounted(){
    this.showUser();
  },
  watch: {
    '$route' (to, from) { //监听路由是否变化
      if(to.path == "/"){ //跳转到哪个页面
        location.reload()
      }
    },
  },
  methods: {

    loginout: function () {
      var url = '/api/loginout'
      axios.get(url).then(res => {
        if (res.data != null && res.data =="退出成功") {
            location.reload();
          this.$router.push({name: 'index'});

        }
      })
    },
    userinfo: function () {

      var url = '/api/checkLogin'
      axios.get(url).then(res => {

        if (res.data != null && res.data =="成功") {
          this.$router.push({name: 'userinfo'});
        }else if (res.data != null && res.data =="未登录"){
          this.$router.push({name: 'userlogin'});
        }
      })
    },
    realinfo: function () {

      var url = '/api/checkLogin'
      axios.get(url).then(res => {

        if (res.data != null && res.data =="成功") {
          this.$router.push({name: 'realinfo'});
        }else if (res.data != null && res.data =="未登录"){
          this.$router.push({name: 'userlogin'});
        }
      })
    },showUser:function () {
      var url="/api/getUserSession";
      var _this=this;
      axios.post(url).then(res=>{
        if(res.data==null||res.data==""){
          _this.showname=true;
        }else {
          _this.names=res.data;
          _this.showname=false;
        }
      })
    }
  }
  }
</script>


<style>
  a, abbr, acronym, address, applet, big, blockquote, body, caption, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, iframe, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, ul, var {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
  }
  a{
    text-decoration:none;
    cursor: pointer;
  }
  #head{
    height: 36px;
    line-height: 36px;
    background: #fff;
    color: #555;
    border-bottom: 1px solid #ddd;
  }
  #headin{
    overflow: hidden;
    margin-left: 936px;
  }
  .headtap{
    float: left;
    margin-right: 13px;
  }
  #headin a{
    line-height: 36px;
    color: #666;
    font-size: 12px;
  }
  #headin a:hover{
    color: #ff5809;
  }
</style>
