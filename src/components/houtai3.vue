<template>
  <div id="car">

      <h1>商品管理</h1>
    <el-button type="success" round @click="tohoutai2" size="small">买家管理</el-button>
    <el-button type="success" round @click="tohoutai1" size="small">卖家管理</el-button>
    <el-table
      :data="car"
      stripe
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="cid"
        label="cid"
        width="80">
      </el-table-column>
      <el-table-column
        prop="cname"
        label="车"
        width="260">
      </el-table-column>
      <el-table-column
        prop="brand"
        label="品牌"
        width="80">
      </el-table-column>
      <el-table-column
        prop="ctype"
        label="类型"
        width="80">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格(万)"
        width="80">
      </el-table-column>
      <el-table-column
        prop="mileage"
        label="里程(万公里）"
        width="110">
      </el-table-column>
      <el-table-column
        prop="cyear"
        label="车龄"
        width="80">
      </el-table-column>
      <el-table-column
        prop="color"
        label="颜色"
        width="80">
      </el-table-column>
      <el-table-column
        prop="miaoshu"
        label="描述"
        width="150">
      </el-table-column>
      <el-table-column
        prop="pic"
        label="图片"
        width="120">
        <template slot-scope="car">
          <img :src="car.row.pic" width="100" height="60">
        </template>
      </el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="car">
          <el-button type="danger" round @click="todelete(car.row.cid)" size="small"><i class="el-icon-delete"></i></el-button>
          <el-button type="danger" round @click="toupdate(car.row.cid)" size="small"><i class="el-icon-edit"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page">
    </el-pagination>
  </div>
</template>
<style scoped>
  #car{
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
<style scoped>
  #car{
    width:100%;
    height: 600px;
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
  #tou{

  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
  import axios from 'axios'
  export default{
      data(){
          return{
            car:[],
            total: 0,
            params: {
              page: 1,
              size: 5
            }
          }
      },
    mounted(){
      this.query();
    },
    methods:{
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
          query:function () {
            var url='api/findCarAll/' + this.params.page + "/" + this.params.size
            axios.get(url).then(res=>{
                this.car=res.data.list;
                this.total=res.data.total;
            })
          },
      changePage: function (page) {

        this.params.page = page;
        this.query()
      },
      tohoutai1:function () {
        this.$router.push({name:'houtai1'})
      },
      tohoutai2:function () {
        this.$router.push({name:'houtai2'})
      },
      toupdate:function (cid) {
        this.$router.push('/updatehoutai3/'+cid)
      },
      todelete: function (cid) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url = "api/deleteCar"
          axios.post(url, {cid: cid}).then(res => {
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
