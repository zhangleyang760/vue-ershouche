<template>
  <div id="contain">
    <div id="lay1">
      引用首页顶部
    </div>
    <div id="lay2" align="center">
      <div id="left" >
        <div id="L_lay1">
          <div id="lab1" >个人信息</div>
          <div id="username" class="ROW">姓名</div>
          <div id="userphone" class="ROW">电话</div>
          <div id="provice" class="ROW">省份</div>
          <div id="city" class="ROW">城市</div>
          <div id="sex" class="ROW">性别</div>
          <div id="email" class="ROW">邮件</div>
        </div>
      </div>
      <div id="right">
        <div id="R_column1" class="R">
          <div class="pic">图片1</div>
          <div class="headline">奔驰</div>
        </div>
        <div id="R_column2" class="R">
          <div class="pic">图片2</div>
          <div class="headline">大G</div>
        </div>
        <div id="R_column3" class="R">
          <div class="pic">图片3</div>
          <div class="headline">布加迪</div>
        </div>
        <div id="R_column4" class="R">
          <div class="pic">图片4</div>
          <div class="headline">林肯</div>
        </div>
        <div id="R_column5" class="R" >
          <div class="pic">图片5</div>
          <div class="headline">奔驰</div>
        </div>
        <div id="R_column6" class="R">
          <div class="pic">图片6</div>
          <div class="headline">大众</div>
        </div>
      </div>
    </div>
    <div id="bottom">
      引用首页底部
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  export default{
    data(){
      return{
        users:[],

      }
    },
    mounted(){
      this.query();
    },methods:{
      query:function () {
        var url='api/findBuyer'
        axios.get(url).then(res=>{
          this.users=res.data.list;
        })
      }
    }
  }
</script>
<style>
  #lay1{
    background-color: aquamarine;
    width: 1349px;
    height: 20px;
  }
  #lay2{
    width:1100px;
    height: 500px;
  }
  #left{
    width:400px;
    height: 500px;
    float: left;
  }
  #L_lay1{
    width: 400px;
    height: 500px;
  }
  #lab1{
    width:400px;
    height:50px;
    font-family: "Microsoft YaHei";
    font-size: 24px;
    text-align: center;

  }
  .ROW{
    width:400px;
    height:75px ;
    font-size: 16px;
    text-align: center;
    line-height:21px;
  }
  #right{
    width:650px;
    height: 500px;
    float: left;
  }
  .R{
    width:215px;
    height: 250px;
    float: left;
  }
  #bottom{
    background-color: yellow;
    width: 1349px;
    height: 20px;
  }
</style>
