<template>
  <div id="app">
    <div>
      <div id="head">
        <div id="headin">
          <div class="headtap"><a href="userlogin.vue">登录</a> | <a href="userReg.vue">注册</a> </div>
          <div class="headtap"><a href="userinfo.vue">个人中心</a> </div>
          <div class="headtap"><a href="">商家中心</a> </div>
          <div class="headtap"><a href="">帮助中心</a> </div>
          <div class="headtap"><a href="">联系客服</a> </div>
          <div class="headtap"><a href="">网站导航</a> </div>
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
    position: absolute;
    top:0px;
  }
  #head{
    width: 1519.4px;
    height: 36px;
    line-height: 36px;
    background: #fff;
    color: #555;
    border-bottom: 1px solid #ddd;
  }
  #headin{
    margin-left: 966px;
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
