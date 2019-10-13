<template>

  <div id="seller">
    <div id="tou">
    <h1>卖家信息管理</h1>
    <el-button type="success" round @click="tohoutai2" size="small">买家管理</el-button>
    <el-button type="success" round @click="tohoutai3" size="small">商品管理</el-button></div>
    <el-table
      :data="seller"
      stripe
      style="width: 100%; opacity: "  >

      <el-table-column
        prop="cid"
        label="cid"
        width="50">
      </el-table-column>
      <el-table-column
        prop="sname"
        label="卖家姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="username"
        label="账号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="80">
      </el-table-column>
      <el-table-column
        prop="provice"
        label="省份"
        width="80">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        width="80">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="idcard"
        label="身份证"
        width="220">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="50">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="seller">
          <el-button type="danger" round @click="todelete(seller.row.sid)" size="small"><i class="el-icon-delete"></i></el-button>
          <el-button type="danger" round @click="toupdate(seller.row.sid)" size="small"><i class="el-icon-edit"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>
<style scoped>
  #seller{
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

</style>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              seller:[]
          }
      },
    mounted(){
      this.query();
    },
    methods:{
      query:function () {
        var url='api/findSeller'
        axios.get(url).then(res=>{
          this.seller=res.data;
        })
      },
      toupdate:function (sid) {
        this.$router.push('/updatehoutai1/'+sid)

      },

      todelete: function (sid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url = "api/deleteSeller"
          axios.post(url, {sid: sid}).then(res => {
            this.query();
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      tohoutai2:function () {
        this.$router.push({name:'houtai2'})
      },
      tohoutai3:function () {
        this.$router.push({name:'houtai3'})
      }
  }
  }

</script>
