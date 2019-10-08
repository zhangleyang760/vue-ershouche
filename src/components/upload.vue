<template>
  <div id="contain">
    <div id="outline">
      <input placeholder="车主姓名" v-model="users.name"/><br>
      <input placeholder="品牌" v-model="users.brand"/><br>
      <input placeholder="描述" v-model="users.describe"/><br>
      <input placeholder="类型" v-model="users.type"/><br>
      <input placeholder="价格" v-model="users.price"/><br>
      <input placeholder="车龄" v-model="users.age"/><br>
      <input placeholder="里程" v-model="users.mileage"/><br>
      <input placeholder="颜色" v-model="users.colour"/><br>
      <input type="file" value="pic1" placeholder="主图" v-on="users.pic1"><br/>
      <input type="file" value="pic2" placeholder="副图1" v-on="users.pic2"><br/>
      <input type="file" value="pic3" placeholder="副图2" v-on="users.pic3"><br/>
      <input type="file" value="pic4" placeholder="副图3" v-on="users.pic4">
    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              users:{
                  name:'',
                  brand:'',
                  describe:'',
                  type:'',
                  price:'',
                  age:'',
                  mileage:'',
                  colour:'',
                  pic1:'',
                  pic2:'',
                  pic3:'',
                  pic4:''
              }
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
