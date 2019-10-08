<template>
  <div>
    车：<el-input  v-model="car.cname" ></el-input>
    品牌：<el-input  v-model="car.brand" placeholder="请输入姓名"></el-input>
    类型：<el-input  v-model="car.ctype" placeholder="请输入姓名"></el-input>
    价格：<el-input  v-model="car.price" placeholder="请输入姓名"></el-input>
    车龄：<el-input  v-model="car.cyear" placeholder="请输入姓名"></el-input>
    里程：<el-input  v-model="car.mileage" placeholder="请输入姓名"></el-input>
    颜色：<el-input  v-model="car.color" placeholder="请输入姓名"></el-input>
    描述：<el-input  v-model="car.miaoshu" placeholder="请输入姓名"></el-input>

    <el-button type="primary" @click="update()">修改</el-button>
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
            }
        }
    },
    mounted(){
        var cid=this.$route.cid
      var url='api/findCarId'
      axios.post(url,{cid:cid}).then(res=>{
          this.car=res.data;
      })
    },
    methods:{
        update:function () {
          var url='api/updateCar'
          axios.post(url).then(res=>{
              this.$router.push({name:'houtai3'})
          })
        }


    }
  }
</script>
