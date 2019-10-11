<template>
  <div id="userinfo_contain" align="center">
    <el-button type="primary" @click="update(seller.sid)">修改个人信息</el-button>
        <div id="L_lay1">
          <div id="lab1" >PERSONAL INFORMATION</div>
          <div id="username" class="ROW">姓名：<span v-text="seller.sname"></span></div>
          <div id="userphone" class="ROW">手机号：<span v-text="seller.phone"></span></div>
          <div id="provice" class="ROW">省份:<span v-text="seller.provice"></span></div>
          <div id="city" class="ROW">城市:<span v-text="seller.city"></span></div>
          <div id="idcard" class="ROW">身份证号:<span v-text="seller.idcard"></span></div>
          <div id="sex" class="ROW">性别:<span v-text="seller.sex"></span></div>
          <div id="email" class="ROW">邮箱:<span v-text="seller.email"></span></div>
        </div>
      <!--<div id="right">-->
        <!--<div id="headline2" align="center">我的收藏</div>-->
        <!--<div id="R_column1" class="R">-->
          <!--<div class="pic">图片1</div>-->
          <!--<div class="headline">奔驰</div>-->
        <!--</div>-->
        <!--<div id="R_column2" class="R">-->
          <!--<div class="pic">图片2</div>-->
          <!--<div class="headline">大G</div>-->
        <!--</div>-->
        <!--<div id="R_column3" class="R">-->
          <!--<div class="pic">图片3</div>-->
          <!--<div class="headline">布加迪</div>-->
        <!--</div>-->
        <!--<div id="R_column4" class="R">-->
          <!--<div class="pic">图片4</div>-->
          <!--<div class="headline">林肯</div>-->
        <!--</div>-->
        <!--<div id="R_column5" class="R" >-->
          <!--<div class="pic">图片5</div>-->
          <!--<div class="headline">奔驰</div>-->
        <!--</div>-->
        <!--<div id="R_column6" class="R">-->
          <!--<div class="pic">图片6</div>-->
          <!--<div class="headline">大众</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
</template>
<script>
  import axios from "axios"
  export default{
    data(){
      return{
        seller:{
          cid:'',
          sname:'',
          username:'',
          password:'',
          provice:'',
          city:'',
          phone:'',
          idcard:'',
          sex:'',
          email:'',
        }
      }
    },
    mounted(){
      this.query();
    },methods:{
      query:function () {
        var url='api/findBySellerName'
        axios.get(url).then(res=>{
          this.seller=res.data;
        })
      },
      update:function (sid) {
       this.$router.push('userupdate/'+sid)
      }
    }
  }
</script>
<style scoped>

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
    height: 225px;
    float: left;
  }
  #headline2{
    width:650px;
    height:30px;
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    background-color: limegreen;
    font-family: "Microsoft YaHei";
    font-weight: bolder;
    color: aliceblue;


  }

</style>
