<template>
  <div>
    买家姓名：<el-input  v-model="seller.sname" placeholder="请输入密码"></el-input>
    买家账号：<el-input  v-model="seller.username" placeholder="请输入邮箱"></el-input>
    卖家密码：<el-input  v-model="seller.password" placeholder="请输入密码"></el-input>
    省份：<el-input  v-model="seller.provice" placeholder="请输入密码"></el-input>
    城市：<el-input  v-model="seller.city" placeholder="请输入密码"></el-input>
    身份证号：<el-input  v-model="seller.idcard" placeholder="请输入密码"></el-input>
    手机号：<el-input  v-model="seller.phone" placeholder="请输入密码"></el-input>
    性别：<el-input  v-model="seller.sex" placeholder="请输入密码"></el-input>
    邮箱：<el-input  v-model="seller.email" placeholder="请输入密码"></el-input>
    <el-button type="primary" @click="update()">修改</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              seller:{
                  sid:'',
                bname:'',
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
          var sid=this.$route.params.sid
          var url='api/findBySeller'
      axios.post(url,{sid:sid}).then(res=>{
          if (res.data!=null){
              this.customer=res.data();
          }
      })
    },
    methods:{
        update:function () {
          var url='api/updateSeller'
          axios.post(url,this.seller).then(res=>{
              this.$touter.push({name:'houtai2'})
          })
        },
    }
  }
</script>
