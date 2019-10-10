<template>
  <div id="contain">

    <div id="lay2" align="center">
      <div id="left" >
        <div id="L_lay1">
          <div id="lab1" >PERSONAL INFORMATION</div>
          <div id="username" class="ROW">{{users.sname}}</div>
          <div id="userphone" class="ROW">PHONE</div>
          <div id="provice" class="ROW">PROVICE</div>
          <div id="city" class="ROW">CITY</div>
          <div id="sex" class="ROW">SEX</div>
          <div id="email" class="ROW">EMAIL</div>
        </div>
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

  </div>
</template>
<script>
  import axios from "axios"
  export default{
    data(){
      return{
        users:{
          sname:''
        }



      }
    },
    mounted(){
      this.query();
    },methods:{
      query:function () {
        var url='api/findBySellerName'
        axios.get(url).then(res=>{
          this.users=res.data.list;
        })
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
