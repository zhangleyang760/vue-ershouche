<template>
  <div id="app">
    <div>
      <div id="head">
        <div id="headin">
          <div class="headtap"><router-link to="/userlogin">登录</router-link>|<router-link to="/userReg">注册</router-link> </div>
          <div class="headtap"><router-link to="/userinfo">个人中心</router-link></div>
          <div class="headtap"><a href="">商家中心</a> </div>
          <div class="headtap"><a href="">帮助中心</a> </div>
          <div class="headtap"><a href="">联系客服</a> </div>
          <div class="headtap"><a href="">网站导航</a> </div>
          <div class="headtap"><router-link to="/adminlogin">后台管理</router-link> </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
