<template>
  <div id="contain">
    <div id="outline">
      <!--<el-steps :active="active" align-center>-->
      <!--<el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--</el-steps>-->

      <!--车主姓名：<el-input v-model="users.name" placeholder="车主姓名"></el-input>-->
      <!--<form enctype="multipart/form-data" action="#" method="post">-->
      <el-input v-model="users.cname" placeholder="请输入车主姓名"></el-input>
      <el-input v-model="users.brand" placeholder="请输入品牌"></el-input>
      <el-input v-model="users.miaoshu" placeholder="请输入描述"></el-input>
      <el-input v-model="users.ctype" placeholder="请输入类型"></el-input>
      <el-input v-model="users.price" placeholder="请输入价格"></el-input>
      <el-input v-model="users.cyear" placeholder="请输入车龄"></el-input>
      <el-input v-model="users.mileage" placeholder="请输入里程"></el-input>
      <el-input v-model="users.color" placeholder="请输入颜色"></el-input>
      <el-button type="primary" round @click=upload()>上传数据</el-button>

      <!--<el-upload-->
      <!--class="upload-demo"-->
      <!--drag-->
      <!--action="api/uploadPic"-->
      <!--:file-list="fileList"-->
      <!--multiple>-->
      <!--<i class="el-icon-upload"></i>-->
      <!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
      <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
      <!--</el-upload>-->
      <!--<el-input v-model="users.cname" placeholder="请再次输入车主姓名"></el-input>-->
      <!--<el-input v-model="users.brand" placeholder="请再次输入品牌"></el-input>-->
      <el-input type="file" v-model="users.pic" placeholder="请上传图片"></el-input>
      <el-input v-model="users.cname" placeholder="请输入车主姓名"></el-input>
      <el-input v-model="users.brand" placeholder="请输入品牌"></el-input>
      <el-button type="primary" round @click=uploadPic() >提交</el-button>


      <!--<el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
      <!--<el-input type="file"  v-model="users.picture" placeholder="请上传图片"></el-input>-->
      <!--<input placeholder="车主姓名" v-model="users.cname" name="cname"/><br>-->
      <!--<input placeholder="品牌" v-model="users.brand" name="brand"/><br>-->
      <!--<input placeholder="描述" v-model="users.miaoshu" name="miaoshu"/><br>-->
      <!--<input placeholder="类型" v-model="users.ctype" name="ctype"/><br>-->
      <!--<input placeholder="价格" v-model="users.price" name="price"/><br>-->
      <!--<input placeholder="车龄" v-model="users.cyear" name="cyear"/><br>-->
      <!--<input placeholder="里程" v-model="users.mileage" name="mileage"/><br>-->
      <!--<input placeholder="颜色" v-model="users.color" name="color"/><br>-->
      <!--<input type="file" value="pic1" placeholder="主图" v-on="users.pic" name="pic"><br/>-->
      <!--<input type="file" value="pic2" placeholder="副图1" v-on="users.pic2"><br/>-->
      <!--<input type="file" value="pic3" placeholder="副图2" v-on="users.pic3"><br/>-->
      <!--<input type="file" value="pic4" placeholder="副图3" v-on="users.pic4"><br/>-->
      <!--<input type="submit" value="提交" @click=upload() />-->

      <!--</form>-->
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        active:0,
        users:{
          cname:'',
          brand:'',
          miaoshu:'',
          ctype:'',
          price:'',
          cyear:'',
          mileage:'',
          color:'',
          picture:'',
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
      },
//      next() {
//        if (this.active++ > 3) this.active = 4;
//      }
      uploadPic:function () {
        var url='api/uploadPic'
        axios.post(url,this,users).then(res=>{

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
