<template>
  <div>

    用户姓名：<el-input  v-model="seller.sname" placeholder="请输入密码"></el-input>

    省份：<el-input  v-model="seller.provice" placeholder="请输入省份"></el-input>
    城市：<el-input  v-model="seller.city" placeholder="请输入城市"></el-input>
    身份证号：<el-input  v-model="seller.idcard" placeholder="请输入身份证号"></el-input>
    手机号：<el-input  v-model="seller.phone" placeholder="请输入手机号"></el-input>
    性别：<el-input  v-model="seller.sex" placeholder="请输入性别"></el-input>
    邮箱：<el-input  v-model="seller.email" placeholder="请输入邮箱"></el-input>
    <el-button type="primary" @click="update()">修改</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
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
      var sid=this.$route.params.sid
      var url='api/findBySellerId'
      axios.post(url,{sid:sid}).then(res=>{
        if (res.data!=null){
          this.seller=res.data;
        }
      })
    },
    methods:{
      update:function () {
        var url='api/updateSeller'
        axios.post(url,this.seller).then(res=>{
          this.$router.push({name:'userinfo'})
        })
      },
    }
  }
</script>
