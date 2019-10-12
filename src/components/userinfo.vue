<template>
  <div id="userinfo_contain" align="center">
          <div id="lab1"><h3>个人信息<i class="el-icon-s-custom"></i></h3></div>
          <div id="username" class="ROW"><i class="el-icon-user"></i>姓名：<span v-text="seller.sname"></span></div>
          <div id="userphone" class="ROW"><i class="el-icon-phone"></i>手机号：<span v-text="seller.phone"></span></div>
          <div id="provice" class="ROW"><i class="el-icon-location"></i>省份:<span v-text="seller.provice"></span></div>
          <div id="city" class="ROW"><i class="el-icon-place"></i>城市:<span v-text="seller.city"></span></div>
          <div id="idcard" class="ROW"><i class="el-icon-s-order"></i>身份证号:<span v-text="seller.idcard"></span></div>
          <div id="sex" class="ROW"><i class="el-icon-male"></i>性别:<span v-text="seller.sex"></span></div>
          <div id="email" class="ROW"><i class="el-icon-message"></i>邮箱:<span v-text="seller.email"></span></div>
           <el-button id="btn" type="primary" @click="update(seller.sid)"><i class="el-icon-edit"></i>修改个人信息</el-button>

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
    components: {},
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
<style>

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
    height:80px;
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
  #btn{
    position: absolute;
    top:620px;
    left: 615px;

  }

</style>
