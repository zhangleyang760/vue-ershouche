<template>
  <div id="app">
    <div>
      <div id="head">
        <div id="headin">
          <div class="headtap"><router-link to="/">首页</router-link></div>
          <div class="headtap"><router-link to="/userlogin">登录</router-link>|<router-link to="/userReg">注册</router-link> </div>
          <div class="headtap"><router-link to="/userinfo">个人中心</router-link></div>
          <div class="headtap"><a >商家中心</a> </div>
          <div class="headtap"><a >帮助中心</a> </div>
          <div class="headtap"><a >联系客服</a> </div>
          <div class="headtap"><a >网站导航</a> </div>
          <div class="headtap"><router-link to="/adminlogin">后台管理</router-link> </div>
          <div class="headtap"><router-link to="/realinfo">实名认证</router-link></div>
          <div class="headtap" ><a  @click="loginout()">注销</a> </div>
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
          this.$router.push({name: 'userlogin'});
        }
      })
    }
  }
  }
</script>


<style scoped>
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
    margin-left: 975px;
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
