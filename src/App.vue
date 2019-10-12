<template>
  <div id="app">
    <div>
      <div id="head">
        <div id="headin">
          <div class="headtap"><router-link to="/">首页</router-link></div>
          <div class="headtap"><router-link to="/userlogin">登录</router-link>|<router-link to="/userReg">注册</router-link> </div>
          <div class="headtap"><a @click="userinfo">个人中心</a></div>
          <div class="headtap"><a >商家中心</a> </div>
          <div class="headtap"><a >帮助中心</a> </div>
          <div class="headtap"><a >联系客服</a> </div>
          <div class="headtap"><a >网站导航</a> </div>
          <div class="headtap"><router-link to="/adminlogin">后台管理</router-link> </div>
          <div class="headtap"><router-link to="/realinfo">实名认证</router-link></div>
          <div class="headtap"><a @click="loginout()">退出登录</a></div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import axios from "axios"
export default {
  methods: {

    loginout: function () {
      var url = '/api/loginout'
      axios.get(url).then(res => {
        if (res.data != null && res.data =="退出成功") {
          //alert(res.data)
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
    cursor: pointer;
  }
  #app{

  }
  #head{
    height: 36px;
    line-height: 36px;
    background: #fff;
    color: #555;
    border-bottom: 1px solid #ddd;
  }
  #headin{
    margin-left: 600px;
  }
  .headtap{
    float: left;
    margin-right: 13px;
  }
  #headin a{
    line-height: 36px;
    color: #666;
    text-decoration:none;
    font-size: 12px;
  }
  #headin a:hover{
    color: #ff5809;
  }
</style>
