<template>

  <div>

    <h1>买家信息管理</h1><el-button type="success" round @click="tohoutai1" size="small">卖家管理</el-button>
    <el-button type="success" round @click="tohoutai3" size="small">商品管理</el-button>
    <el-table
      :data="customer"
      stripe
      style="width: 100%">
      <el-table-column
        prop="bid"
        label="sid"
        width="80">
      </el-table-column>


      <el-table-column
        prop="bname"
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
        width="80">
      </el-table-column>
      <el-table-column
        prop="idcard"
        label="身份证"
        width="80">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="80">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="customer">
          <el-button type="danger" round @click="todelete(customer.row.bid)" size="small">删除</el-button>
          <el-button type="danger" round @click="toupdate(customer.row.bid)" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  import axios from 'axios'
  export default{
      data(){
          return{
              customer:[]
          }
      },
    moutend(){

    },
    methods:{
        query:function () {
          var url="api/findCustomer"
          axios.get(url).then(res=> {
            this.customer = res.data;

          })
    },
      toupdate:function (bid) {
        this.$router.push('/updatehoutai1/'+bid)
      },

      todelete: function (bid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url = "api/deleteCustomer"
          axios.post(url, {sid: bid}).then(res => {
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
      tohoutai1:function () {
        this.$router.push({name:'houtai1'})
      },
      tohoutai3:function () {
        this.$router.push({name:'houtai3'})
      }
  }
  }

</script>
