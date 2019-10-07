<template>

  <div>
    <h1>卖家信息管理</h1>
    <el-table
      :data="seller"
      stripe
      style="width: 100%">
      <el-table-column
        prop="sid"
        label="sid"
        width="80">
      </el-table-column>
      <el-table-column
        prop="cid"
        label="cid"
        width="80">
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
        <template slot-scope="seller">
          <el-button type="danger" round @click="todelete(seller.row.sid)" size="small">删除</el-button>
          <el-button type="danger" round @click="toupdate(seller.row.sid)" size="small">修改</el-button>
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
              seller:[]
          }
      },
    moutend(){

    },
    methods:{
        query:function () {
          var url="api/findSeller"
          axios.get(url).then(res=> {
            this.seller = res.data;

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
  }
  }

</script>
