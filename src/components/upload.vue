<template>
  <div id="upload_contain">
    <div id="outline" align="center">
      <el-form :inline="true" :model="users" class="demo-form-inline">
      <!--<el-steps :active="active" align-center>-->
      <!--<el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--<el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>-->
      <!--</el-steps>-->

      <!--车主姓名：<el-input v-model="users.name" placeholder="车主姓名"></el-input>-->
      <!--<form enctype="multipart/form-data" action="#" method="post">-->
      <!--<form action="userinfo" enctype="multipart/form-data">-->
        <br><h1>上传信息&nbsp;&nbsp;<i class="el-icon-s-custom"></i></h1><br>
        <i class="el-icon-truck"></i>&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item  label="车名：">
          <el-input  v-model="users.cname" placeholder="请输入车的全称" ></el-input>
        </el-form-item><br>
        <i class="el-icon-star-off"></i>&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item label="品牌：">
          <el-input v-model="users.brand" placeholder="请输入品牌"></el-input>
        </el-form-item><br>
          <i class="el-icon-info"></i>&nbsp;&nbsp;&nbsp;&nbsp; <el-form-item label="描述：">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入描述"
          v-model="textarea">
        </el-input>
        </el-form-item><br>
          <i class="el-icon-price-tag"></i>&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item label="类型：">
        <el-row class="demo-autocomplete">
          <el-col :span="12">
            <el-autocomplete
              class="inline-input"
              v-model="state1"
              style="width: 202px"
              :fetch-suggestions="querySearch"
              placeholder="请输入类型"
              @select="handleSelect"
            ></el-autocomplete>
          </el-col>
        </el-row>
        </el-form-item><br>
          <i class="el-icon-coin"></i>&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item label="价格：">
          <el-input v-model="users.price" placeholder="请输入价格"></el-input>
        </el-form-item><br>
          <i class="el-icon-time"></i>&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item label="车龄：">
          <el-input v-model="users.cyear" placeholder="请输入车龄"></el-input>
        </el-form-item><br>
          <i class="el-icon-odometer"></i>&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item label="里程：">
      <el-input v-model="users.mileage" placeholder="请输入里程"></el-input>
        </el-form-item><br>
          <i class="el-icon-magic-stick"></i>&nbsp;&nbsp;&nbsp;&nbsp;<el-form-item label="颜色：">
      <el-input v-model="users.color" placeholder="请输入颜色"></el-input>
        </el-form-item><br>
      <!--<el-input type="file" v-model="users.picture" placeholder="请上传图片"></el-input>-->


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
      <el-upload
        id="UP1"
        class="avatar-uploader"
        action="api/uploadPic"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <!--<el-button type="primary" round @click=uploadPic() >提交</el-button>-->

      <el-button  id="btn1" type="primary" round  @click=upload()>上传数据</el-button>
      <!--</form>-->

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
        <!--<el-upload-->
          <!--class="upload-demo"-->
          <!--action="api/uploadPic1"-->
          <!--:on-preview="handlePreview"-->
          <!--:on-remove="handleRemove"-->
          <!--:file-list="fileList"-->
          <!--list-type="picture">-->
          <!--<el-button size="small" type="primary">点击上传</el-button>-->
          <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
        <!--</el-upload>-->
        <el-upload
          id="UP2"
          class="avatar-uploader"
          action="api/uploadPic1"
          :show-file-list="false"
          :on-success="handleAvatarSuccess2"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-button id="btn2" type="primary" round  @click=uploadCarpic()>上传副图</el-button>
      <!--</form>-->
        返回首页<i class="el-icon-right" @click=skip()></i>
      </el-form>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
//        active:0,
        imageUrl: '',
        imageUrl1:'',
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
        },
        cars:{
            pic:''
        },
        textarea:'',
        restaurants: [],
        state1: '',


      }
    },
    methods:{
      upload:function (x) {
        var url='api/upload'
        axios.post(url,this.users).then(res=>{
          if(res.data!=null){
//            this.$router.push({name:'userinfo'})
            alert("上传成功")
          }else {
            alert("上传失败")
          }
        })
      },
      uploadCarpic:function (x) {
        var url='api/uploadCarpic'
        axios.post(url,this.cars).then(res=>{
          if(res.data!=null){
//            this.$router.push({name:'userinfo'})
            alert("上传成功")
          }else {
            alert("上传失败")
          }
        })
      },
      skip:function () {
        this.$router.push({name:'index'})
      },
//      next() {
//        if (this.active++ > 3) this.active = 4;
//      }
//      uploadPic:function () {
//        var url='api/uploadPic'
//        axios.post(url,this,users).then(res=>{
//
//        })
//      },
      handleAvatarSuccess2(res, file) {
        this.imageUrl1 = URL.createObjectURL(file.raw);
        this.cars.pic=res;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.users.pic=res;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {"value":"越野车"},
          {"value":"轿车"},
          {"value":"皮卡"},
          {"value":"工程车"},
          {"value":"新能源"},
          {"value":"货车"},
          {"value":"三轮机动车"},
          {"value":"面包车"},
          {"value":"老年代步车"},
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted(){
      this.restaurants = this.loadAll();
    }

  }
</script>
<style >
  #upload_contain{
    width:1349px;
    height: 1200px;
    background: url("../../static/images/bgi.jpg");
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size:cover ;

  }
  #outline{
    width:1349px;
    height: 1200px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  el-input{
    width: 800px;
    /*box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)*/
  }
  #UP1{
    position: absolute;
    left: 450px;
    top:720px;
  }
  #UP2{
    position: absolute;
    left: 800px;
    top: 720px;
  }
  #btn1{
    position: absolute;
    left:490px;
    top: 920px;
  }
  #btn2{
    position: absolute;
    left:840px;
    top: 920px;
  }
  .el-icon-right{
    font-size:25px;
  }
  .el-icon-truck{
    font-size: 25px;
    padding-top: 6px;
  }
  .el-icon-star-off{
    font-size: 25px;
    padding-top: 6px;
  }
  .el-icon-info{
    font-size: 25px;
    padding-top: 6px;
  }
  .el-icon-price-tag{
    font-size: 25px;
    padding-top: 6px;
  }
  .el-icon-coin{
    font-size: 25px;
    padding-top: 6px;
  }
  .el-icon-time{
    font-size: 25px;
    padding-top: 6px;
  }
  .el-icon-odometer{
    font-size: 25px;
    padding-top: 6px;
  }
  .el-icon-magic-stick{
    font-size: 25px;
    padding-top: 6px;
  }
  label{
    font-weight: bolder;
    color: aliceblue;
  }
</style>
