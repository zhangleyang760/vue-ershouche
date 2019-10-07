<template>
  <div>
    买家姓名：<el-input  v-model="customer.bname" placeholder="请输入密码"></el-input>
    买家账号：<el-input  v-model="customer.username" placeholder="请输入邮箱"></el-input>
    买家密码：<el-input  v-model="customer.password" placeholder="请输入密码"></el-input>
    省份：<el-input  v-model="customer.provice" placeholder="请输入密码"></el-input>
    城市：<el-input  v-model="customer.city" placeholder="请输入密码"></el-input>
    身份证号：<el-input  v-model="customer.idcard" placeholder="请输入密码"></el-input>
    手机号：<el-input  v-model="customer.phone" placeholder="请输入密码"></el-input>
    性别：<el-input  v-model="customer.sex" placeholder="请输入密码"></el-input>
    邮箱：<el-input  v-model="customer.email" placeholder="请输入密码"></el-input>
    <el-button type="primary" @click="update()">修改</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              customer:{
                  bid:'',
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
          var id=this.$route.params.bid
          var url='api/findByCustomer'
      axios.post(url,{bid:bid}).then(res=>{
          if (res.data!=null){
              this.customer=res.data();
          }
      })
    },
    methods:{
        update:function () {
          var url='api/updateCustomer'
          axios.post(url,this.customer).then(res=>{
              this.$touter.push({name:'houtai2'})
          })
        },
    }
  }
</script>
