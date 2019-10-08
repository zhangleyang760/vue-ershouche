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


  </div>
</template>
import axios from 'axios'
<script>
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
    }
  }
</script>
