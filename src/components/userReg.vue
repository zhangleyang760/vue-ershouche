<template>
  <div>
    <h1>用户注册</h1><br>
    <el-form :inline="true" :model="user" class="demo-form-inline">
      <el-form-item label="注册邮箱：">
        <el-input v-model="user.email" placeholder="请输入QQ邮箱"></el-input>
      </el-form-item><br>
      <el-form-item>
        <el-button type="primary" @click="getcode()">获取验证码</el-button>
      </el-form-item><br>
      <el-form-item label="真实姓名：">
        <el-input v-model="user.sname" placeholder="请输入您的真实姓名"></el-input>
      </el-form-item><br>
      <el-form-item label="身份证号：">
        <el-input v-model="user.idcard" placeholder="请输入您的身份证号"></el-input>
      </el-form-item><br>
      <el-form-item label="性别：">
        <el-input v-model="user.sex" placeholder="请输入您的性别：男或女"></el-input>
      </el-form-item><br>
      <el-form-item label="所在省份：">
        <el-input v-model="user.provice" placeholder="请输入所在省份"></el-input>
      </el-form-item><br>
      <el-form-item label="所在城市：">
        <el-input v-model="user.city" placeholder="请输入所在城市"></el-input>
      </el-form-item><br>
      <el-form-item label="手机号：">
        <el-input v-model="user.phone" placeholder="请输入手机号"></el-input>
      </el-form-item><br>
      <el-form-item label="账户名：">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item><br>
      <el-form-item label="密码：">
        <el-input v-model="user.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item><br>
      <el-form-item label="验证：">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item><br>
      <el-form-item>
        <el-button type="primary" @click="submit()">注册</el-button>
      </el-form-item>
    </el-form>


  </div>
</template>
<script>
  import axios from "axios"
  export default{
    name:'',
    data(){
      return{
        user:{
          email:'',
          username:'',
          password:'',
          sname:'',
          provice:'',
          city:'',
          phone:'',
          idcard:'',
          sex:'',
          code:''
        }
      }
    },
    methods:{
     submit:function () {
        var url='/api/register'
        axios.post(url,this.user).then(res=>{
          // alert(res.data)
          if (res.data!=null){
              alert(res.data)
            this.$router.push({name:'userlogin'});
          }else if(res.data==null){
            alert("注册失败")
            this.$router.push({name:'userReg'});
          }
        })
      },
      getcode:function () {
        //alert("123456789")
        var url='/api/sendEmail'
        axios.post(url,this.user).then(res=>{
          //alert(res.data)
        })

      } }

  }
</script>
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
