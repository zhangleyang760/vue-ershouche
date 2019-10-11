<template>
    <div id="detail">
      <div id="headdiv">
        <div id="logo"><img src="http://pyl6emnsf.bkt.clouddn.com/logo.jpg"/></div>
        <div id="post"><a href="">免费发布信息</a></div>
      </div>
      <div id="main">
        <span id="carName" v-text="this.car.cname"></span>
      <div id="lunboBack">
      <div id="lunbo">
        <div class="block" >
          <el-carousel trigger="click" height="270px" :interval="5000" arrow="always" indicator-position="outside">
            <el-carousel-item v-for="pic in this.pics" >
              <img :src="pic"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      </div>
        <div id="info">
          <span id="price">￥<span v-text="this.car.price"></span> 万元</span><span id="guohu">(含过户费)</span>
          <div id="msg">
            <div>
              <span class="msgList">品牌</span>
              <span class="msgList">表显里程</span>
              <span class="msgList">车龄</span>
              <span class="msgList">车类</span>
            </div>
            <el-divider></el-divider>
            <div>
              <span class="msgVue" v-text="this.car.brand"></span>
              <span class="msgVue" v-text="this.car.mileage+'万公里'"></span>
              <span class="msgVue" v-text="this.car.cyear+'年'"></span>
              <span class="msgVue" v-text="this.car.ctype"></span>
            </div>
          </div>
        </div>
        <div id="tel">
          <i class="el-icon-phone-outline" ></i><span>查看电话号码</span>
        </div>
        <div id="sellerInfo">
          <span>商家：</span><a v-text="this.seller.sname"></a><br/>
          <span>看车地址：</span><span v-text="this.seller.provice"></span><span v-text="this.seller.city"></span>
        </div>
      </div>


    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        data(){
            return {
                cid:'',
                pics:[
                  'http://pyl6emnsf.bkt.clouddn.com/huluwa.jpg',
                  'http://pyl6emnsf.bkt.clouddn.com//Frd88DWuFPqIO9mycK-PYSGtZ7eZ',
                  'http://pyl6emnsf.bkt.clouddn.com/huluwa.jpg',
                  'http://pyl6emnsf.bkt.clouddn.com//Frd88DWuFPqIO9mycK-PYSGtZ7eZ'
                ],
                car:{
                    cname:'汉兰达 2009款 3.5L 四驱7座精英版',
                    brand:'宝马',
                    ctype:'越野车',
                    price:'18',
                    mileage:'2',
                    cyear:'2',
                    miaoshu:'好看好看好看好看好看好看好看好看好看好看好看好看好看好看好看'
                },
                seller:{
                    sname:'大郎',
                    provice:'陕西',
                    city:'西安',
                    phone:'10086',
                }
            }
        },
        mounted(){
            this.cid=this.$route.params.cid;
            this.reset(this.cid);


        },
        methods: {
            reset:function (cid) {
                axios.post('/api/detail',{cid:cid}).then(res=>{
                    this.car=res.data.car;
                    this.seller=res.data.seller;
                    this.pics=res.data.pics;
                })
            }

        }
    }
</script>
<style scoped>
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    vertical-align: baseline;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 0px;
    outline: 0px;
    padding: 0px;
  }
  #headdiv{
    height: 104px;
    background-color: white;
  }
  #logo{
    float: left;
    position: relative;
    width: 316px;
    height:110px;
    left: 150px;
  }
  #logo img{
    position: relative;
    top: 30px;
    width: 316px;
    height:53px;
  }

  #post{
    position: relative;
    left: 896px;
    height: 100px;
    width: 104px;
    float: left;
    border: 0;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  body{
    margin: 0;
    padding: 0;
    font-size: 12px;
    background-color: #f5f5f5;
    line-height: 1;
  }
  #post a{
    text-decoration:none;
    margin-top: 30px;
    display: inline-block;
    width: 120px;
    height: 42px;
    line-height: 42px;
    background: #ffefe7;
    color: #ff552e;
    text-align: center;
    border: 0;
  }
  #main{
    height: 473px;
    position: relative;
    background-color: white;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;
    padding: 30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #carName{
    font-size: 24px;
    color: #666;
    width: 940px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  #lunbo{
    height: 270px;
    width: 480px;
    position: relative;
    top: 40px;
  }
  #lunbo img{
    height: 270px;
    width: 480px;
  }
  #lunboBack{
    margin-top: 40px;
    height: 350px;
    width: 480px;
    background-color: #eee;

  }
  #info{
    width: 637px;
    background-color: #fbfafa;
    position: absolute;
    left: 44%;
    top: 91px;
    padding: 20px;
    padding-bottom: 47px;
  }
  #info #price{
    font-size: 24px;
    position: relative;
    font-weight: 400;
    margin-right: 2px;
    color: #ff552e;
  }
  #info #price span{
    font-size: 40px;
    font-weight: 700;
  }
  #info #guohu{
    font-size: 14px;
    color: #666;
  }
  #info #msg{
    top: 25px;
    position: relative;
    padding: 35px 0;
    overflow: hidden;
    width: 500px;
  }
  #info #msg .msgList{
    left: 34px;
    top: -8px;
    position: relative;
    float: left;
    display:block;
    color: #9b9b9b;
    font-size: 18px;
    width: 108px;
  }
  #info #msg .msgVue{
    position: relative;
    left: 35px;
    top: -13px;
    float: left;
    width: 108px;
    display: block;
    margin-top: 5px;
    font-size: 16px;
    color: #666;
  }
  #tel{
    position: absolute;
    left: 44%;
    top: 368px;
    float: left;
    width: 360px;
    height: 75px;
    line-height: 75px;
    background-color: #ff552e;
    font-size: 24px;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  #sellerInfo{
    font-size: 14px;
    color: #666;
    position: absolute;
    top: 450px;
    line-height: 20px;
   width: 600px;
    left: 44%;
    margin: 0px;
  }



</style>
