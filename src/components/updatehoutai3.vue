<template>
  <div id="car1">
    <h1>商品信息修改</h1>
<form>
   <div id="car2"> 车：<el-input  v-model="car.cname"  style="width: 600px"></el-input></div>
  <div id="car2"> 品牌：<el-input  v-model="car.brand"  style="width: 600px"></el-input></div>
    <div id="car2"> 类型：<el-input  v-model="car.ctype"  style="width: 600px"></el-input></div>
      <div id="car2"> 价格：<el-input  v-model="car.price"  style="width: 600px"></el-input></div>
        <div id="car2">车龄：<el-input  v-model="car.cyear"  style="width: 600px"></el-input></div>
          <div id="car2">里程：<el-input  v-model="car.mileage"  style="width: 600px"></el-input></div>
            <div id="car2"> 颜色：<el-input  v-model="car.color"  style="width: 600px"></el-input></div>
              <div id="car2"> 描述：<el-input  v-model="car.miaoshu" style="width: 600px"></el-input></div>

   更换展示图： <el-upload
    class="avatar-uploader"
    action="api/updatePic"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

  <!--<el-button type="primary" round @click=uploadPic() >提交</el-button>-->

  <el-button type="primary" round  @click=update()>修改</el-button>
</form>
  </div>
</template>
<style scoped>
  #car1{
    width:100%;
    height: 100%;
    line-height: 20px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    background:  url("../../static/images/11111.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    color: ivory;
  }
  #car2{
    text-align: center;
    margin: 0 auto;
    margin-top: 15px;
  }
</style>

<script>
  import axios from 'axios'
  export default{
    data(){
      return{
//        active:0,
        imageUrl: '',
        car:{
          cname:'',
          brand:'',
          miaoshu:'',
          ctype:'',
          price:'',
          cyear:'',
          mileage:'',
          color:'',
          pic:'',
        }
      }
    },mounted(){
        this.query()
    },
    methods:{
        query:function () {
          var cid=this.$route.params.cid
          var url='api/findCarId'
          axios.post(url,{cid:cid}).then(res=>{
            if (res.data!=null){
              this.car=res.data;
            }
          })
        },
      update:function () {
        var url='api/updateCar'
        axios.post(url,this.car).then(res=>{
          if(res.data!=null){
            this.$router.push({name:'houtai3'})
            alert("修改成功")
          }else {
            alert("修改失败")
          }
        })
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.car.pic=res;
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
      }

    }

  }
</script>
<style scoped>

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

  }
</style>

