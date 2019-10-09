<template>
  <div>
    <h1>商品信息修改</h1>
    车：<el-input  v-model="car.cname" ></el-input>
    品牌：<el-input  v-model="car.brand" ></el-input>
    类型：<el-input  v-model="car.ctype" ></el-input>
    价格：<el-input  v-model="car.price" ></el-input>
    车龄：<el-input  v-model="car.cyear" ></el-input>
    里程：<el-input  v-model="car.mileage" ></el-input>
    颜色：<el-input  v-model="car.color" ></el-input>
    描述：<el-input  v-model="car.miaoshu"></el-input>
    展示图：<el-input  v-model="car.pic"></el-input>
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
        }


    }
  }
</script>
