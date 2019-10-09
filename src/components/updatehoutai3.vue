<template>
  <div>
    <h1>商品信息修改</h1>
<form>
    车：<el-input  v-model="car.cname" ></el-input>
    品牌：<el-input  v-model="car.brand" ></el-input>
    类型：<el-input  v-model="car.ctype" ></el-input>
    价格：<el-input  v-model="car.price" ></el-input>
    车龄：<el-input  v-model="car.cyear" ></el-input>
    里程：<el-input  v-model="car.mileage" ></el-input>
    颜色：<el-input  v-model="car.color" ></el-input>
    描述：<el-input  v-model="car.miaoshu"></el-input>
    展示图：<el-image style="width: 100px; height: 100px" :src="car.pic"></el-image>
    <el-upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">更换图片</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-button type="primary" @click="update()">修改</el-button>
</form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data(){
        return{
            car:{
                cname:'',
                brand:'',
              ctype:'',
              price:'',
              mileage:'',
              cyear:'',
              color:'',
              pic:'',
              miaoshu:'',
            },
            fileList:[]
        }
    },
    mounted(){
      var cid=this.$route.params.cid
      var url='api/findCarId'
      axios.post(url,{cid:cid}).then(res=>{
          this.car=res.data;
      })
    },
    methods:{

        update:function () {

          var url='api/updateCar'
          axios.post(url,this.car).then(res=>{
              this.$router.push({name:'houtai3'})
          })
        },
      submitUpload() {
       var file=this.file
        var url='api/updateCarPic'
        axios.post(url,file).then(res=>{
            alert("更换成功")
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }



    }
  }
</script>
