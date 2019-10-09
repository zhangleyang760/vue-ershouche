<template>
  <div id="contain">
    <div id="outline">
      <!--车主姓名：<el-input v-model="users.name" placeholder="车主姓名"></el-input>-->
      <input placeholder="车主姓名" v-model="users.cname"/><br>
      <input placeholder="品牌" v-model="users.brand"/><br>
      <input placeholder="描述" v-model="users.miaoshu"/><br>
      <input placeholder="类型" v-model="users.ctype"/><br>
      <input placeholder="价格" v-model="users.price"/><br>
      <input placeholder="车龄" v-model="users.cyear"/><br>
      <input placeholder="里程" v-model="users.mileage"/><br>
      <input placeholder="颜色" v-model="users.color"/><br>
      <input type="file" value="pic1" placeholder="主图" v-on="users.pic"><br/>
      <!--<input type="file" value="pic2" placeholder="副图1" v-on="users.pic2"><br/>-->
      <!--<input type="file" value="pic3" placeholder="副图2" v-on="users.pic3"><br/>-->
      <!--<input type="file" value="pic4" placeholder="副图3" v-on="users.pic4"><br/>-->
      <input type="submit" value="提交" @click="upload()"/>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              users:{
                  cname:'',
                  brand:'',
                  miaoshu:'',
                  ctype:'',
                  price:'',
                  cyear:'',
                  mileage:'',
                  color:'',
                  pic:'',
                  pic2:'',
                  pic3:'',
                  pic4:''
              }
          }
      },
    methods:{
          upload:function () {
            var url='api/upload'
            axios.post(url,this.users).then(res=>{
              if(res.data!=null){
                  this.$router.push({name:'userinfo'})
              }else {
                  alert("上传失败")
              }
            })
          }
    }

  }
</script>
<style>
  #contain{
    width:1349px;
    height: 800px;
  }
  #outline{
    width:1349px;
    height: 800px;
  }
</style>
