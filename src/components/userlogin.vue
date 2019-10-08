<template>
  <div>
    <h1>用户登录</h1><br>
    <el-form :inline="true" :model="user" class="demo-form-inline">

      <el-form-item label="用户名：">
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
      </el-form-item><br>
      <el-form-item label="密码：">
        <el-input v-model="user.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item><br>
      <el-form-item>
        <el-button type="primary" round @click="submit()">登录</el-button>
        <el-button type="primary" round @click="toinsert()">注册</el-button>
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
                username:'',
                password:''
             }
         }
      },
    methods:{
          submit:function () {
            var url='/api/login'
            axios.post(url,this.user).then(res=>{
              // alert(res.data)
                if (res.data!=null&&res.data=="登录成功"){
                    alert(res.data)
                this.$router.push({name:'userlist'});
                }else if(res.data==null){
                  this.$router.push({name:'HelloWorld'});
                }
            })
          },
      toinsert:function () {
        this.$router.push("/userReg")
      }
    }
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
